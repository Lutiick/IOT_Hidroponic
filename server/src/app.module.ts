import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlantsModule } from './plants/plants.module';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { PlantModel } from './plants/model';
import { TemperatureModel } from './temperatures/model/temperature.model';
import { HumidityModel } from './humidities/model/humidity.model';
import { TemperaturesModule } from './temperatures/temperatures.module';
import { HumiditiesModule } from './humidities/humidities.module';
import { WaterLevelsModule } from './water-levels/water-levels.module';
import { WaterLevelModel } from './water-levels/model/water-level.model';

@Module({
  imports: [
    PlantsModule,
    HumiditiesModule,
    WaterLevelsModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    SequelizeModule.forRoot({
      dialect: process.env.DB_DIALECT as any,
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASS || null,
      database: process.env.DB_NAME,
      define: {
        freezeTableName: true,
        updatedAt: false,
      },
      models: [PlantModel, TemperatureModel, HumidityModel, WaterLevelModel],
    }),
    TemperaturesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

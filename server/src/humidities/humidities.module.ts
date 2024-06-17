import { Module } from '@nestjs/common';
import { HumiditiesService } from './humidities.service';
import { HumiditiesContoller } from './humidities.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { HumidityModel } from './model/humidity.model';

@Module({
  imports: [SequelizeModule.forFeature([HumidityModel])],
  controllers: [HumiditiesContoller],
  providers: [HumiditiesService],
})
export class HumiditiesModule {}

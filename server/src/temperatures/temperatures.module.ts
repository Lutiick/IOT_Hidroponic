import { Module } from '@nestjs/common';
import { TemperaturesService } from './temperatures.service';
import { TemperaturesController } from './temperatures.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { TemperatureModel } from './model/temperature.model';

@Module({
  imports: [SequelizeModule.forFeature([TemperatureModel])],
  controllers: [TemperaturesController],
  providers: [TemperaturesService],
})
export class TemperaturesModule {}

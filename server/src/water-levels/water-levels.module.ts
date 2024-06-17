import { Module } from '@nestjs/common';
import { WaterLevelsService } from './water-levels.service';
import { WaterLevelsContoller } from './water-levels.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { WaterLevelModel } from './model/water-level.model';

@Module({
  imports: [SequelizeModule.forFeature([WaterLevelModel])],
  controllers: [WaterLevelsContoller],
  providers: [WaterLevelsService],
})
export class WaterLevelsModule {}

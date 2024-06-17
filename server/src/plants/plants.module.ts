import { Module } from '@nestjs/common';
import { PlantsService } from './plants.service';
import { PlantsController } from './plants.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { PlantModel } from './model/plant.model';

@Module({
  imports: [SequelizeModule.forFeature([PlantModel])],
  controllers: [PlantsController],
  providers: [PlantsService],
})
export class PlantsModule {}

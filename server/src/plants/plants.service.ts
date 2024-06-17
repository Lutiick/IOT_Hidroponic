import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePlantDto, UpdatePlantDto, PlantDto } from './dto';
import { PlantModel } from './model/plant.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class PlantsService {
  constructor(@InjectModel(PlantModel) private plantModel: typeof PlantModel) {}

  async create(createPlantDto: CreatePlantDto) {
    const plant = await this.plantModel.create({ ...createPlantDto });
    return new PlantDto(plant);
  }

  async findAll() {
    const plants = await this.plantModel.findAll();
    return plants.map((plant) => new PlantDto(plant));
  }

  async findOne(id: number) {
    const plant = await this.plantModel.findByPk(id);
    if (!plant) {
      throw new NotFoundException(`Plant #${id} not found`);
    }
    return new PlantDto(plant);
  }

  async findSelected() {
    const plant = await this.plantModel.findOne({
      where: { isSelected: true },
    });
    if (!plant) {
      throw new NotFoundException(`Selected plant not found`);
    }
    return new PlantDto(plant);
  }

  async update(id: number, updatePlantDto: UpdatePlantDto) {
    const plant = await this.plantModel.findByPk(id);
    if (!plant) {
      throw new NotFoundException(`Plant #${id} not found`);
    }
    const updatedPlant = await plant.update(
      { ...updatePlantDto },
      { where: { id } },
    );
    return new PlantDto(updatedPlant);
  }

  async select(id: number) {
    const plant = await this.plantModel.findByPk(id);
    if (!plant) {
      throw new NotFoundException(`Plant #${id} not found`);
    }
    await this.plantModel.update({ isSelected: false }, { where: {} });
    const updatedPlant = await plant.update({ isSelected: true });
    return new PlantDto(updatedPlant);
  }

  async remove(id: number) {
    const plant = await this.findOne(id);
    if (!plant) {
      throw new NotFoundException(`Plant #${id} not found`);
    }
    await this.plantModel.destroy({ where: { id } });
    return plant;
  }
}

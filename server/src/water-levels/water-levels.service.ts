import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateWaterLevelDto, UpdateWaterLevelDto, WaterLevelDto } from './dto';
import { InjectModel } from '@nestjs/sequelize';
import { WaterLevelModel } from './model/water-level.model';
import { Op } from 'sequelize';

@Injectable()
export class WaterLevelsService {
  constructor(
    @InjectModel(WaterLevelModel)
    private readonly temperatureModel: typeof WaterLevelModel,
  ) {}

  async create(createWaterLevelDto: CreateWaterLevelDto) {
    const temperature = await this.temperatureModel.create({
      ...createWaterLevelDto,
    });
    return new WaterLevelDto(temperature);
  }

  async findAll() {
    const temperatures = await this.temperatureModel.findAll();
    return temperatures.map((temperature) => new WaterLevelDto(temperature));
  }

  async findLastHour() {
    const temperatures = await this.temperatureModel.findAll({
      where: {
        createdAt: {
          [Op.gt]: new Date(new Date().getTime() - 60 * 60 * 1000),
        },
      },
    });
    return temperatures.map((temperature) => new WaterLevelDto(temperature));
  }

  async findOne(id: number) {
    const temperature = await this.temperatureModel.findByPk(id);
    if (!temperature) {
      throw new NotFoundException(`WaterLevel #${id} not found`);
    }
    return new WaterLevelDto(temperature);
  }

  async update(id: number, updateWaterLevelDto: UpdateWaterLevelDto) {
    const [numberOfAffectedRows, [updatedWaterLevel]] =
      await this.temperatureModel.update(
        { ...updateWaterLevelDto },
        { where: { id }, returning: true },
      );
    if (numberOfAffectedRows === 0) {
      throw new NotFoundException(`WaterLevel #${id} not found`);
    }
    return new WaterLevelDto(updatedWaterLevel);
  }

  async remove(id: number) {
    const temperature = await this.findOne(id);
    if (!temperature) {
      throw new NotFoundException(`WaterLevel #${id} not found`);
    }
    await this.temperatureModel.destroy({ where: { id } });
    return temperature;
  }
}

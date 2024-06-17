import { Injectable, NotFoundException } from '@nestjs/common';
import {
  CreateTemperatureDto,
  UpdateTemperatureDto,
  TemperatureDto,
} from './dto';
import { InjectModel } from '@nestjs/sequelize';
import { TemperatureModel } from './model/temperature.model';
import { Op } from 'sequelize';

@Injectable()
export class TemperaturesService {
  constructor(
    @InjectModel(TemperatureModel)
    private readonly temperatureModel: typeof TemperatureModel,
  ) {}

  async create(createTemperatureDto: CreateTemperatureDto) {
    const temperature = await this.temperatureModel.create({
      ...createTemperatureDto,
    });
    return new TemperatureDto(temperature);
  }

  async findAll() {
    const temperatures = await this.temperatureModel.findAll();
    return temperatures.map((temperature) => new TemperatureDto(temperature));
  }

  async findLastHour() {
    const temperatures = await this.temperatureModel.findAll({
      where: {
        createdAt: {
          [Op.gt]: new Date(new Date().getTime() - 60 * 60 * 1000),
        },
      },
    });
    return temperatures.map((temperature) => new TemperatureDto(temperature));
  }

  async findOne(id: number) {
    const temperature = await this.temperatureModel.findByPk(id);
    if (!temperature) {
      throw new NotFoundException(`Temperature #${id} not found`);
    }
    return new TemperatureDto(temperature);
  }

  async update(id: number, updateTemperatureDto: UpdateTemperatureDto) {
    const [numberOfAffectedRows, [updatedTemperature]] =
      await this.temperatureModel.update(
        { ...updateTemperatureDto },
        { where: { id }, returning: true },
      );
    if (numberOfAffectedRows === 0) {
      throw new NotFoundException(`Temperature #${id} not found`);
    }
    return new TemperatureDto(updatedTemperature);
  }

  async remove(id: number) {
    const temperature = await this.findOne(id);
    if (!temperature) {
      throw new NotFoundException(`Temperature #${id} not found`);
    }
    await this.temperatureModel.destroy({ where: { id } });
    return temperature;
  }
}

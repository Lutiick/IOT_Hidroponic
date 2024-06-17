import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateHumidityDto, UpdateHumidityDto, HumidityDto } from './dto';
import { InjectModel } from '@nestjs/sequelize';
import { HumidityModel } from './model/humidity.model';
import { Op } from 'sequelize';

@Injectable()
export class HumiditiesService {
  constructor(
    @InjectModel(HumidityModel)
    private readonly temperatureModel: typeof HumidityModel,
  ) {}

  async create(createHumidityDto: CreateHumidityDto) {
    const temperature = await this.temperatureModel.create({
      ...createHumidityDto,
    });
    return new HumidityDto(temperature);
  }

  async findAll() {
    const temperatures = await this.temperatureModel.findAll();
    return temperatures.map((temperature) => new HumidityDto(temperature));
  }

  async findLastHour() {
    const temperatures = await this.temperatureModel.findAll({
      where: {
        createdAt: {
          [Op.gt]: new Date(new Date().getTime() - 60 * 60 * 1000),
        },
      },
    });
    return temperatures.map((temperature) => new HumidityDto(temperature));
  }

  async findOne(id: number) {
    const temperature = await this.temperatureModel.findByPk(id);
    if (!temperature) {
      throw new NotFoundException(`Humidity #${id} not found`);
    }
    return new HumidityDto(temperature);
  }

  async update(id: number, updateHumidityDto: UpdateHumidityDto) {
    const [numberOfAffectedRows, [updatedHumidity]] =
      await this.temperatureModel.update(
        { ...updateHumidityDto },
        { where: { id }, returning: true },
      );
    if (numberOfAffectedRows === 0) {
      throw new NotFoundException(`Humidity #${id} not found`);
    }
    return new HumidityDto(updatedHumidity);
  }

  async remove(id: number) {
    const temperature = await this.findOne(id);
    if (!temperature) {
      throw new NotFoundException(`Humidity #${id} not found`);
    }
    await this.temperatureModel.destroy({ where: { id } });
    return temperature;
  }
}

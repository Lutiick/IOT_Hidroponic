import { PartialType } from '@nestjs/swagger';
import { CreateHumidityDto } from './create-humidity.dto';

export class UpdateHumidityDto extends PartialType(CreateHumidityDto) {}

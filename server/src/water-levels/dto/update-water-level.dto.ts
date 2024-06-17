import { PartialType } from '@nestjs/swagger';
import { CreateWaterLevelDto } from './create-water-level.dto';

export class UpdateWaterLevelDto extends PartialType(CreateWaterLevelDto) {}

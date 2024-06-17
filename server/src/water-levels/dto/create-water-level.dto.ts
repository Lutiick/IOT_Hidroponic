import { IsInt } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateWaterLevelDto {
  @IsInt()
  @ApiProperty()
  value: number;
}

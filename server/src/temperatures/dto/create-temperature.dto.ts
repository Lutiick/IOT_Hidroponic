import { IsInt } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTemperatureDto {
  @IsInt()
  @ApiProperty()
  value: number;
}

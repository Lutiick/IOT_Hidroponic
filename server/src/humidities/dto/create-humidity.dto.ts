import { IsInt } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateHumidityDto {
  @IsInt()
  @ApiProperty()
  value: number;
}

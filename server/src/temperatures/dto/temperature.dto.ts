import { ApiProperty } from '@nestjs/swagger';

export class TemperatureDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  value: number;

  @ApiProperty()
  createdAt: Date;

  constructor(temperature: Partial<TemperatureDto>) {
    this.id = temperature?.id;
    this.value = temperature?.value;
    this.createdAt = temperature?.createdAt;
  }
}

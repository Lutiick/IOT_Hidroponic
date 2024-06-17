import { ApiProperty } from '@nestjs/swagger';

export class WaterLevelDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  value: number;

  @ApiProperty()
  createdAt: Date;

  constructor(temperature: Partial<WaterLevelDto>) {
    this.id = temperature?.id;
    this.value = temperature?.value;
    this.createdAt = temperature?.createdAt;
  }
}

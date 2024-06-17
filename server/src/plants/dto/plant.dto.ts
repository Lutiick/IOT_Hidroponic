import { ApiProperty } from '@nestjs/swagger';

export class PlantDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty({ nullable: true })
  description: string | null;

  @ApiProperty()
  nutrientVolume: number;

  @ApiProperty()
  nutrientAdditionFrequency: number;

  @ApiProperty({ nullable: true })
  lastTimeNutrientAdded: Date | null;

  @ApiProperty()
  isSelected: boolean;

  @ApiProperty()
  createdAt: Date;

  constructor(plant: Partial<PlantDto>) {
    this.id = plant?.id;
    this.name = plant?.name;
    this.description = plant?.description;
    this.nutrientVolume = plant?.nutrientVolume;
    this.nutrientAdditionFrequency = plant?.nutrientAdditionFrequency;
    this.lastTimeNutrientAdded = plant?.lastTimeNutrientAdded;
    this.isSelected = plant?.isSelected;
    this.createdAt = plant?.createdAt;
  }
}

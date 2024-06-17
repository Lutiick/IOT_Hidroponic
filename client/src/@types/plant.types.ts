export interface PlantDto {
  id: number;
  name: string;
  description: string;
  nutrientVolume: number;
  nutrientAdditionFrequency: number;
  lastTimeNutrientAdded: string;
  isSelected: boolean;
  createdAt: string;
}

export interface CreatePlantDto {
  name: string;
  description?: string;
  nutrientVolume: number;
  nutrientAdditionFrequency: number;
  isSelected?: boolean;
}

export interface UpdatePlantDto {
  name?: string;
  description?: string;
  nutrientVolume?: number;
  nutrientAdditionFrequency?: number;
  isSelected?: boolean;
}

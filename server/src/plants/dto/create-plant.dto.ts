import { IsString, IsOptional, IsInt, IsBoolean } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreatePlantDto {
  @IsString()
  @ApiProperty()
  name: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  description: string;

  @IsInt()
  @ApiProperty()
  nutrientVolume: number;

  @IsInt()
  @ApiProperty()
  nutrientAdditionFrequency: number;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  isSelected: boolean;
}

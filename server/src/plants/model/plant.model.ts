import { Column, Model, Table } from 'sequelize-typescript';

@Table({
  tableName: 'Plant',
})
export class PlantModel extends Model {
  @Column
  name: string;

  @Column
  description: string;

  @Column
  nutrientVolume: number;

  @Column
  nutrientAdditionFrequency: number;

  @Column
  lastTimeNutrientAdded: Date;

  @Column
  isSelected: boolean;
}

import { Column, Model, Table } from 'sequelize-typescript';

@Table({
  tableName: 'WaterLevel',
})
export class WaterLevelModel extends Model {
  @Column
  value: number;
}

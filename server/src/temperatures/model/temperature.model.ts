import { Column, Model, Table } from 'sequelize-typescript';

@Table({
  tableName: 'Temperature',
})
export class TemperatureModel extends Model {
  @Column
  value: number;
}

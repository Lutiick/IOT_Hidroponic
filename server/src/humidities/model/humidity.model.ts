import { Column, Model, Table } from 'sequelize-typescript';

@Table({
  tableName: 'Humidity',
})
export class HumidityModel extends Model {
  @Column
  value: number;
}

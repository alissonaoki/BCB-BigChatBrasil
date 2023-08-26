import { Model, Column, ForeignKey, BelongsTo, DataType, Table } from 'sequelize-typescript';
import { Client } from 'src/clients/models/client.model';

@Table({ tableName: 'finances' }) 
export class Finance extends Model<Finance> {
  @Column
  operationType: string;

  @Column(DataType.DECIMAL(10, 2))
  amount: number;

  @Column
  description: string;

  @Column(DataType.DATE)
  operationDate: Date;

  @ForeignKey(() => Client)
  @Column
  clientId: number;

  @BelongsTo(() => Client)
  client: Client;
}

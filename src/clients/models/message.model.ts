import { Model, Column, ForeignKey, BelongsTo, DataType, Table } from 'sequelize-typescript';
import { Client } from './client.model';

@Table({ tableName: 'messages' }) 
export class Message extends Model<Message> {
  @Column
  phoneNumber: string;

  @Column(DataType.BOOLEAN)
  isWhatsApp: boolean;

  @Column
  text: string;

  @ForeignKey(() => Client)
  @Column
  clientId: number;

  @BelongsTo(() => Client)
  client: Client;
}

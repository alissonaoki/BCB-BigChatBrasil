import { Model, Column, HasMany, Table, DataType } from 'sequelize-typescript';
import { Message } from './message.model';
import { Finance } from 'src/finance/models/finance.model';

@Table({ tableName: 'clients' }) 
export class Client extends Model<Client> {
  @Column
  name: string;

  @Column
  email: string;

  @Column
  phone: string;

  @Column
  cpf: string;

  @Column
  cnpj: string;

  @Column
  companyName: string;

  @Column(DataType.DECIMAL(10, 2))
  balance: number = 0.00; // Valor padrão de 0.00

  @HasMany(() => Message)
  messages: Message[];

  @HasMany(() => Finance)
  financeOperations: Finance[];
}

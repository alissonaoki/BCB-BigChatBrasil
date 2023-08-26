import { Model, Column, HasMany, Table, DataType } from 'sequelize-typescript';
import { Message } from '../../messages/models/message.model';
import { Finance } from 'src/finance/models/finance.model';
import { PaymentPlan } from 'src/enums/payment-plan.enum';

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

  @Column({
    type: DataType.ENUM(PaymentPlan.PRE, PaymentPlan.POS), 
    defaultValue: PaymentPlan.PRE, // Valor padrão é 'PRE'
  })
  paymentPlan: PaymentPlan; 

  @Column({
    type: DataType.DECIMAL(10, 2),
    allowNull: true, // Permite valor nulo para clientes pré-pagos
  })
  maxAuthorizedLimit: number; // Campo para armazenar o limite máximo autorizado para clientes pós-pagos

  @HasMany(() => Message)
  messages: Message[];

  @HasMany(() => Finance)
  financeOperations: Finance[];
}

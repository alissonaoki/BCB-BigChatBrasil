import { IsString, IsNotEmpty, IsNumber, IsDateString } from 'class-validator';
import { Column } from 'sequelize-typescript';

export class CreateFinanceOperationDto {
  @Column
  @IsString()
  @IsNotEmpty()
  readonly operationType: string;

  @Column
  @IsNumber()
  readonly amount: number;

  @Column
  @IsString()
  @IsNotEmpty()
  readonly description: string;

  @Column
  @IsNumber()
  readonly clientId: number;

  @Column
  @IsDateString()
  readonly operationDate: Date;
}

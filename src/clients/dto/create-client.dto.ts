import { IsString, IsNotEmpty, IsEmail, IsPhoneNumber, IsDecimal, IsEnum, IsOptional, Min, IsNumber } from 'class-validator';
import { PaymentPlan } from 'src/enums/payment-plan.enum';

export class CreateClientDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @IsPhoneNumber('BR')
  @IsNotEmpty()
  readonly phone: string;

  //@IsCPF()
  @IsNotEmpty()
  readonly cpf: string;

  //@IsCNPJ()
  @IsNotEmpty()
  readonly cnpj: string;

  @IsString()
  @IsNotEmpty()
  readonly companyName: string;

  @IsNotEmpty()
  @IsDecimal({ decimal_digits: '2' })
  balance: number = 0.00; // Valor padrão de 0.00

  @IsEnum(PaymentPlan, {
    message: 'O plano de pagamento deve ser "PRE" ou "POS".',
  })
  readonly paymentPlan: PaymentPlan;

  @IsOptional()
  @IsDecimal({ decimal_digits: '2' }, { message: 'O limite máximo autorizado deve ser um número válido.' })
  @Min(0, { message: 'O limite máximo autorizado deve ser pelo menos 0.' })
  readonly maxAuthorizedLimit: number = 0.00;;
}

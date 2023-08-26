import { IsString, IsNotEmpty, IsEmail, IsPhoneNumber, IsDecimal } from 'class-validator';

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
}

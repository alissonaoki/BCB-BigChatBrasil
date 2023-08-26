import { IsNotEmpty, IsString, IsBoolean } from 'class-validator';

export class CreateMessageDto {
  @IsString()
  phoneNumber: string;

  @IsBoolean()
  isWhatsApp: boolean;

  @IsString()
  text: string;

  @IsNotEmpty()
  clientId: number;

}
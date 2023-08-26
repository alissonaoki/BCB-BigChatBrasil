import { Controller, Post, Body, HttpStatus } from '@nestjs/common';
import { MessageService } from './message.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { ApiResponse } from 'src/common/responses/api-response.decorator';

@Controller('messages')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Post()
  @ApiResponse(HttpStatus.CREATED, 'Mensagem enviada com sucesso')
  async createMessage(@Body() createMessageDto: CreateMessageDto) {
    return this.messageService.createMessage(createMessageDto);
  }
}

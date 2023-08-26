import { Controller, Post, Body, HttpStatus, UseGuards } from '@nestjs/common';
import { MessageService } from './message.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { ApiResponse } from 'src/common/responses/api-response.decorator';
import { AuthGuard } from 'src/guards/auth.guard';

@Controller('messages')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Post()
  @UseGuards(AuthGuard) 
  @ApiResponse(HttpStatus.CREATED, 'Mensagem enviada com sucesso')
  async createMessage(@Body() createMessageDto: CreateMessageDto) {
    return this.messageService.createMessage(createMessageDto);
  }
}

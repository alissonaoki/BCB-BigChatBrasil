// src/messages/message.service.ts

import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { Client } from 'src/clients/models/client.model';

@Injectable()
export class MessageService {
  constructor(private readonly clientModel: typeof Client) {}

  async createMessage(createMessageDto: CreateMessageDto) {
    // Verificar se o cliente existe
    const client = await this.clientModel.findByPk(createMessageDto.clientId);
    if (!client) {
      throw new NotFoundException('Cliente não encontrado');
    }

    // Esse bloco pode ser mudado para um servico de pagamento
    // Verificar se o cliente tem saldo suficiente
    const messageCost = 0.25; // Custo por mensagem (ajuste conforme necessário)
    if (client.balance < messageCost) {
      throw new Error('Saldo insuficiente para enviar a mensagem');
    }

    // Deduzir o custo da mensagem do saldo do cliente
    client.balance -= messageCost;
    await client.save();

    //implementar a lógica para enviar a mensagem, usar um serviço de mensagens externo.

    return 'Mensagem criada e enviada com sucesso.';
  }
}

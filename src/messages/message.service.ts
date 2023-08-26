import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { PaymentPlan } from 'src/enums/payment-plan.enum';
import { ClientsService } from 'src/clients/clients.service';

@Injectable()
export class MessageService {
  constructor(
    @Inject(ClientsService)
    private readonly clientsService: ClientsService,
  ) {}

  async createMessage(createMessageDto: CreateMessageDto) {
    // Verificar se o cliente existe
    const client = await this.clientsService.findOne(createMessageDto.clientId);
    if (!client) {
      throw new NotFoundException('Cliente não encontrado');
    }

    const messageCost = 0.25; // Custo por mensagem

    switch (client.paymentPlan) {
      case PaymentPlan.PRE:
        // Cliente é pré-pago
        if (client.balance < messageCost) {
          throw new Error('Saldo insuficiente para enviar a mensagem');
        }
        // Deduzir o custo da mensagem do saldo do cliente
        client.balance -= messageCost;
        break;
      case PaymentPlan.POS:
        // Cliente é pós-pago
        const creditLimit = client.maxAuthorizedLimit; // Limite de crédito pós-pago
        if (client.balance + messageCost > creditLimit) {
          throw new Error('Limite de crédito excedido');
        }
        // Incrementar a contagem de mensagens enviadas
        client.balance += messageCost;
        break;
      default:
        throw new Error('Tipo de plano de pagamento inválido');
    }

    // Implementar a lógica para enviar a mensagem, usando um serviço de mensagens externo.
    // Firebase Cloud Messaging (FCM) 

    // Salvar as alterações no cliente
    await client.save();

    return 'Mensagem criada e enviada com sucesso.';
  }
}

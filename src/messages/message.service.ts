import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { ClientsService } from 'src/clients/clients.service';
import { IMessageService } from './interfaces/message-service.interface';
import { IClientService } from 'src/clients/interfaces/clients-service.interface';
import { CostCalculationService } from './services/cost-calculation.service';
import { ICostCalculation } from './interfaces/cost-calculation.interface';

@Injectable()
export class MessageService implements IMessageService {
  constructor(
    @Inject(ClientsService)
    private readonly clientService: IClientService,
    @Inject(CostCalculationService)
    private readonly clientCost: ICostCalculation,
  ) {}

  async createMessage(createMessageDto: CreateMessageDto) {
    // Verificar se o cliente existe
    const client = await this.clientService.findOne(createMessageDto.clientId);
    if (!client) {
      throw new NotFoundException('Cliente não encontrado');
    }

    this.clientCost.calculate(client);
    await client.save();

    return 'Mensagem criada e enviada com sucesso.';
  }
}

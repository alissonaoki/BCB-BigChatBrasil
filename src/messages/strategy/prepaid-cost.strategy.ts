import { Client } from 'src/clients/models/client.model';
import { ICostCalculationStrategy } from '../interfaces/cost-caculator-strategy.interface';

export class PrepaidCostStrategy implements ICostCalculationStrategy {
  calculateCost(client: Client, messageCost: number): void {
    if (client.balance < messageCost) {
      throw new Error('Saldo insuficiente para enviar a mensagem');
    }
    client.balance -= messageCost;
  }
}
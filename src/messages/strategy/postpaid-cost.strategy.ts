import { Client } from 'src/clients/models/client.model';
import { ICostCalculationStrategy } from '../interfaces/cost-caculator-strategy.interface';

export class PostpaidCostStrategy implements ICostCalculationStrategy {
  calculateCost(client: Client, messageCost: number): void {
    const creditLimit = client.maxAuthorizedLimit;
    if (client.balance + messageCost > creditLimit) {
      throw new Error('Limite de crédito excedido');
    }
    client.balance += messageCost;
  }
}
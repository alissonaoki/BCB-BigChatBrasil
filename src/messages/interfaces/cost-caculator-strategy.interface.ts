import { Client } from 'src/clients/models/client.model';

export interface ICostCalculationStrategy {
  calculateCost(client: Client, messageCost: number): void;
}
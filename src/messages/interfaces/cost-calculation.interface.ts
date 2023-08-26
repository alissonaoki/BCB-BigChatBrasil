import { Client } from 'src/clients/models/client.model';

export interface ICostCalculation {
  calculate(client: Client): void;
}
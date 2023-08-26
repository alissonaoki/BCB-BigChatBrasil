import { CreateClientDto } from '../dto/create-client.dto';
import { UpdateClientDto } from '../dto/update-client.dto';
import { Client } from '../models/client.model';

export interface IClientService {
  findAll(): Promise<Client[]>;
  findOne(id: number): Promise<Client | null>;
  create(createClientDto: CreateClientDto): Promise<Client>;
  update(id: number, updateClientDto: UpdateClientDto): Promise<number>;
  remove(id: number): Promise<number>;
}
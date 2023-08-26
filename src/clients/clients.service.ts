import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateClientDto } from 'src/clients/dto/create-client.dto';
import { Client } from 'src/clients/models/client.model';
import { UpdateClientDto } from './dto/update-client.dto';
import { IClientService } from './interfaces/clients-service.interface';

@Injectable()
export class ClientsService implements IClientService {
  constructor(
    @InjectModel(Client)
    private readonly clientModel: typeof Client,
  ) {}

  async findAll(): Promise<Client[]> {
    return this.clientModel.findAll();
  }

  async findOne(id: number): Promise<Client | null> {
    return this.clientModel.findByPk(id);
  }

  async create(createClientDto: CreateClientDto): Promise<Client> {
    return this.clientModel.create(createClientDto);
  }

  async update(id: number, updateClientDto: UpdateClientDto): Promise<number> {
    const [affectedCount] = await this.clientModel.update(updateClientDto, {
      where: {
        id,
      },
    });
    return affectedCount; // Retorna o número de linhas afetadas
  }

  async remove(id: number): Promise<number> {
    const result = await this.clientModel.destroy({
      where: {
        id,
      },
    });
    return result;
  }
}

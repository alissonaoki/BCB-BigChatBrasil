import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/sequelize';
import { ClientsService } from 'src/clients/clients.service';
import { Client } from 'src/clients/models/client.model';

describe('ClientsService', () => {
  let clientsService: ClientsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ClientsService,
        {
          provide: getModelToken(Client),
          useValue: {},
        },
      ],
    }).compile();

    clientsService = module.get<ClientsService>(ClientsService);
  });

  it('should be defined', () => {
    expect(clientsService).toBeDefined();
  });

});

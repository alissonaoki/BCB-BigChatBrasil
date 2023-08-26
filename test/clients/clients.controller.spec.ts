import { Test, TestingModule } from '@nestjs/testing';
import { ClientsController } from 'src/clients/client.controller';
import { ClientsService } from 'src/clients/clients.service';

describe('ClientsController', () => {
  let clientsController: ClientsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClientsController],
      providers: [ClientsService],
    }).compile();

    clientsController = module.get<ClientsController>(ClientsController);
  });

  it('should be defined', () => {
    expect(clientsController).toBeDefined();
  });

});

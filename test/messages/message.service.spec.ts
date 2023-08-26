import { Test, TestingModule } from '@nestjs/testing';
import { MessageService } from 'src/messages/message.service';

describe('MessageService', () => {
  let messageService: MessageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MessageService],
    }).compile();

    messageService = module.get<MessageService>(MessageService);
  });

  it('should be defined', () => {
    expect(messageService).toBeDefined();
  });

});

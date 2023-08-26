import { Test, TestingModule } from '@nestjs/testing';
import { MessageController } from 'src/messages/message.controller';
import { MessageService } from 'src/messages/message.service';

describe('MessageController', () => {
  let messageController: MessageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MessageController],
      providers: [MessageService],
    }).compile();

    messageController = module.get<MessageController>(MessageController);
  });

  it('should be defined', () => {
    expect(messageController).toBeDefined();
  });

});

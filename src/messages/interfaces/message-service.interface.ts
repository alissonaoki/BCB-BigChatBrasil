import { CreateMessageDto } from "src/messages/dto/create-message.dto";

export interface IMessageService {
  createMessage(createMessageDto: CreateMessageDto): Promise<string>;
}
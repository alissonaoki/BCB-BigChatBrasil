import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ClientsController } from './client.controller';
import { ClientsService } from './clients.service';
import { Client } from './models/client.model';
import { Message } from '../messages/models/message.model';

@Module({
  imports: [SequelizeModule.forFeature([Client,Message])],
  controllers: [ClientsController],
  providers: [ClientsService],
})
export class ClientsModule {}

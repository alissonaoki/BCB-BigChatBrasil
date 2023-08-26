import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ClientsController } from './src/clients/client.controller';
import { ClientsService } from './src/clients/clients.service';
import { Client } from './src/clients/models/client.model';
import { Message } from './src/clients/models/message.model';

@Module({
  imports: [SequelizeModule.forFeature([Client,Message])],
  controllers: [ClientsController],
  providers: [ClientsService],
})
export class ClientsModule {}

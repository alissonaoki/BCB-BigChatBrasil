import { Sequelize } from 'sequelize-typescript';
import { databaseConfig } from 'config/database.config';
import { Client } from 'src/clients/models/client.model';
import { Finance } from 'src/finance/models/finance.model';
import { Message } from 'src/messages/models/message.model';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize(databaseConfig);
      sequelize.addModels([Client, Finance, Message]); 
      await sequelize.sync();
      return {
        sequelize,
      };
    },
  },
];

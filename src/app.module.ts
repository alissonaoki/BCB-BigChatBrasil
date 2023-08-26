import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { ClientsModule } from './clients/clients.module';
import { FinanceModule } from './finance/finance.module';
import { databaseConfig } from 'config/database.config';
import { AuthModule } from './auth/auth.module';
import { MessageModule } from './messages/message.module';

@Module({
  imports: [
    SequelizeModule.forRootAsync({
      useFactory: () => ({
        ...databaseConfig, 
        autoLoadModels: true, 
        synchronize: true,
      }),
    }),
    ClientsModule,
    FinanceModule,
    MessageModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

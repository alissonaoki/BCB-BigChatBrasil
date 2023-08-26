import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { ClientsModule } from '../clients.module';
import { FinanceModule } from './finance/finance.module';
import { databaseConfig } from 'config/database.config';

@Module({
  imports: [
    SequelizeModule.forRootAsync({
      useFactory: () => ({
        ...databaseConfig, // Passe todas as configurações do arquivo database.config.ts
        autoLoadModels: true, // Defina como true se desejar que o Sequelize carregue automaticamente os modelos
        synchronize: true, // Defina como true para sincronizar automaticamente o banco de dados (use com cautela em produção)
      }),
    }),
    ClientsModule,
    FinanceModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

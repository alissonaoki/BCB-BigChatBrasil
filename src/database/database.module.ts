import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { databaseProviders } from './database.providers';

@Module({
  imports: [
    SequelizeModule.forRootAsync({
      useFactory: () => ({
        dialect: 'postgres', // ou outro banco de dados de sua escolha
        host: process.env.DB_HOST || '172.20.0.2',
        port: parseInt(process.env.DB_PORT) || 5432,
        username: process.env.DB_USERNAME || 'bcb_user',
        password: process.env.DB_PASSWORD || 'bcb_password',
        database: process.env.DB_NAME || 'bcb_database',
        autoLoadModels: true,
        synchronize: true, // Defina como false em um ambiente de produção
      }),
    }),
  ],
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}

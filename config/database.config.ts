import { SequelizeModuleOptions } from '@nestjs/sequelize';

export const databaseConfig: SequelizeModuleOptions = {
  dialect: 'postgres',
  host: process.env.DB_HOST || '172.20.0.2',
  port: parseInt(process.env.DB_PORT) || 5432,
  username: process.env.DB_USERNAME || 'bcb_user',
  password: process.env.DB_PASSWORD || 'bcb_password',
  database: process.env.DB_NAME || 'bcb_database',
};
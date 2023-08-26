import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { FinanceController } from './finance.controller';
import { FinanceService } from './finance.service';
import { Finance } from './models/finance.model';

@Module({
  imports: [SequelizeModule.forFeature([Finance])], 
  controllers: [FinanceController],
  providers: [FinanceService],
})
export class FinanceModule {}

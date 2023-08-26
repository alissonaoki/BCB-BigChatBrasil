import { Module } from '@nestjs/common';
import { MessageController } from './message.controller';
import { MessageService } from './message.service';
import { ClientsModule } from 'src/clients/clients.module';
import { CostCalculationService } from './services/cost-calculation.service';
import { PrepaidCostStrategy } from './strategy/prepaid-cost.strategy';
import { PostpaidCostStrategy } from './strategy/postpaid-cost.strategy';

@Module({
  imports: [ClientsModule],
  controllers: [MessageController],
  providers: [
    MessageService,
    CostCalculationService,
    PrepaidCostStrategy,
    PostpaidCostStrategy,
  ],
})
export class MessageModule {}

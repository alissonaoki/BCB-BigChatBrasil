import { Client } from 'src/clients/models/client.model';
import { PaymentPlan } from 'src/enums/payment-plan.enum';
import { ICostCalculationStrategy } from '../interfaces/cost-caculator-strategy.interface';
import { PrepaidCostStrategy } from '../strategy/prepaid-cost.strategy';
import { PostpaidCostStrategy } from '../strategy/postpaid-cost.strategy';
import { ICostCalculation } from '../interfaces/cost-calculation.interface';

export class CostCalculationService implements ICostCalculation {
  private _costCalculatorStrategy: ICostCalculationStrategy;

  calculate(client: Client): void {
    const messageCost = 0.25;

    switch (client.paymentPlan) {
      case PaymentPlan.PRE:
        this._costCalculatorStrategy = new PrepaidCostStrategy();
        break;
      case PaymentPlan.POS:
        this._costCalculatorStrategy = new PostpaidCostStrategy();
        break;
      default:
        throw new Error('Tipo de plano de pagamento inválido');
    }

    this._costCalculatorStrategy.calculateCost(client, messageCost);
  }
}
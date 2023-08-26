import { Test, TestingModule } from '@nestjs/testing';
import { FinanceController } from 'src/finance/finance.controller';

describe('FinanceController', () => {
  let financeController: FinanceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FinanceController],
    }).compile();

    financeController = module.get<FinanceController>(FinanceController);
  });

  it('should be defined', () => {
    expect(financeController).toBeDefined();
  });

});

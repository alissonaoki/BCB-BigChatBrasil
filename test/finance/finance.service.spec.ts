import { Test, TestingModule } from '@nestjs/testing';
import { FinanceService } from 'src/finance/finance.service';

describe('FinanceService', () => {
  let financeService: FinanceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FinanceService],
    }).compile();

    financeService = module.get<FinanceService>(FinanceService);
  });

  it('should be defined', () => {
    expect(financeService).toBeDefined();
  });

});

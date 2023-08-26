import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from 'src/app.service';

describe('AppService', () => {
  let appService: AppService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    appService = module.get<AppService>(AppService);
  });

  it('deve ser definido', () => {
    expect(appService).toBeDefined();
  });

  it('deve retornar "Hello World!"', () => {
    const result = appService.getHello();
    expect(result).toBe('Hello World!');
  });
});

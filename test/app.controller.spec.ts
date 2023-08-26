import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from 'src/app.controller';
import { AppService } from 'src/app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = module.get<AppController>(AppController);
  });

  it('deve ser definido', () => {
    expect(appController).toBeDefined();
  });

  it('deve chamar o método getHello do serviço', () => {
    const result = 'Hello World!';
    jest.spyOn(appController, 'getHello').mockReturnValue(result);

    expect(appController.getHello()).toBe(result);
  });
});

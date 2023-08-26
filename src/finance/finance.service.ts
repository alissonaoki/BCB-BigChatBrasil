import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Finance } from './models/finance.model';
import { UpdateFinanceOperationDto } from './dto/update-finance-operation.dto';
import { CreateFinanceOperationDto } from './dto/create-finance-operation.dto';

@Injectable()
export class FinanceService {
  constructor(
    @InjectModel(Finance)
    private readonly financeModel: typeof Finance,
  ) {}

  async findAll(): Promise<Finance[]> {
    return this.financeModel.findAll();
  }

  async findOne(id: number): Promise<Finance | null> {
    return this.financeModel.findByPk(id);
  }

  async create(createFinanceDto: CreateFinanceOperationDto): Promise<Finance> {
    return this.financeModel.create(createFinanceDto);
  }

  async update(id: number, updateFinanceDto: UpdateFinanceOperationDto): Promise<[number, Finance[]]> {
    const [affectedCount] = await this.financeModel.update(updateFinanceDto, {
      where: {
        id,
      },
    });

    if (affectedCount === 0) {
      return [0, []];
    }

    const updatedRecords = await this.financeModel.findAll({
      where: {
        id,
      },
    });

    return [affectedCount, updatedRecords];
  }

  async remove(id: number): Promise<number> {
    return this.financeModel.destroy({
      where: {
        id,
      },
    });
  }
}

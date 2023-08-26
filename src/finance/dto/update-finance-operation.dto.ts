import { PartialType } from '@nestjs/mapped-types';
import { CreateFinanceOperationDto } from './create-finance-operation.dto';

export class UpdateFinanceOperationDto extends PartialType(CreateFinanceOperationDto) {}

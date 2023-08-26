import { Controller, Get, Post, Put, Delete, Param, Body, HttpStatus, UseGuards } from '@nestjs/common';
import { CreateFinanceOperationDto } from './dto/create-finance-operation.dto';
import { FinanceService } from './finance.service';
import { UpdateFinanceOperationDto } from './dto/update-finance-operation.dto';
import { ApiResponse } from 'src/common/responses/api-response.decorator';
import { AuthGuard } from 'src/guards/auth.guard';

@Controller('finance')
export class FinanceController {
  constructor(private readonly financeService: FinanceService) {}

  @Get()
  @UseGuards(AuthGuard) 
  @ApiResponse(HttpStatus.OK, 'Operações financeiras recuperadas com sucesso')
  findAll() {
    return this.financeService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard) 
  @ApiResponse(HttpStatus.OK, 'Operação financeira recuperada com sucesso')
  @ApiResponse(HttpStatus.NOT_FOUND, 'Operação financeira não encontrada')
  findOne(@Param('id') id: number) {
    return this.financeService.findOne(id);
  }

  @Post()
  @UseGuards(AuthGuard) 
  @ApiResponse(HttpStatus.CREATED, 'Operação financeira criada com sucesso')
  create(@Body() createFinanceOperationDto: CreateFinanceOperationDto) {
    return this.financeService.create(createFinanceOperationDto);
  }

  @Put(':id')
  @UseGuards(AuthGuard) 
  @ApiResponse(HttpStatus.OK, 'Operação financeira atualizada com sucesso')
  @ApiResponse(HttpStatus.NOT_FOUND, 'Operação financeira não encontrada')
  update(@Param('id') id: number, @Body() updateFinanceOperationDto: UpdateFinanceOperationDto) {
    return this.financeService.update(id, updateFinanceOperationDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard) 
  @ApiResponse(HttpStatus.NO_CONTENT, 'Operação financeira excluída com sucesso')
  @ApiResponse(HttpStatus.NOT_FOUND, 'Operação financeira não encontrada')
  remove(@Param('id') id: number) {
    return this.financeService.remove(id);
  }
}

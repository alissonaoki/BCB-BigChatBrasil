import { Controller, Get, Post, Put, Delete, Param, Body, HttpStatus } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { ClientsService } from './clients.service';
import { NotFoundResponse } from 'src/common/responses/httpResponses';
import { ApiResponse } from 'src/common/responses/api-response.decorator';

@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Get()
  @ApiResponse(HttpStatus.OK, 'Clientes encontrados com sucesso') 
  async findAll() {
    return this.clientsService.findAll();
  }

  @Get(':id')
  @ApiResponse(HttpStatus.OK, 'Cliente encontrado com sucesso')
  @ApiResponse(HttpStatus.NOT_FOUND, 'Cliente não encontrado')
  async findOne(@Param('id') id: number) {
    const client = await this.clientsService.findOne(id);
    if (!client) {
      return NotFoundResponse('Cliente não encontrado');
    }
    return client;
  }

  @Post()
  @ApiResponse(HttpStatus.CREATED, 'Cliente criado com sucesso') 
  async create(@Body() createClientDto: CreateClientDto) {
    return this.clientsService.create(createClientDto);
  }

  @Put(':id')
  @ApiResponse(HttpStatus.OK, 'Cliente atualizado com sucesso') 
  @ApiResponse(HttpStatus.NOT_FOUND, 'Cliente não encontrado')
  async update(@Param('id') id: number, @Body() updateClientDto: UpdateClientDto) {
    const updatedClient = await this.clientsService.update(id, updateClientDto);
    if (!updatedClient) {
      return NotFoundResponse('Cliente não encontrado');
    }
    return updatedClient;
  }

  @Delete(':id')
  @ApiResponse(HttpStatus.NO_CONTENT, 'Cliente excluído com sucesso')
  @ApiResponse(HttpStatus.NOT_FOUND, 'Cliente não encontrado')
  async remove(@Param('id') id: number) {
    const deletedClient = await this.clientsService.remove(id);
    if (!deletedClient) {
      return NotFoundResponse('Cliente não encontrado');
    }
    return deletedClient;
  }
}

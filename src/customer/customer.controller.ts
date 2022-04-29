import {Controller, Get, Post, Body, Patch, Param, Delete} from '@nestjs/common';
import {CustomerService} from './customer.service';
import {CreateCustomerDto} from './dto/create-customer.dto';
import {UpdateCustomerDto} from './dto/update-customer.dto';
import {ApiTags} from '@nestjs/swagger';

@ApiTags('customer')
@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Post()
  createCustomer(@Body() createCustomerDto: CreateCustomerDto) {
    return this.customerService.createCustomer(createCustomerDto);
  }

  @Get(':id')
  getCustomer(@Param('id') id: string) {
    return this.customerService.getCustomer(id);
  }

  @Patch(':id')
  updateCustomer(@Param('id') id: string, @Body() updateCustomerDto: UpdateCustomerDto) {
    return this.customerService.updateCustomer(id, updateCustomerDto);
  }

  @Delete(':id')
  deleteCustomer(@Param('id') id: string) {
    return this.customerService.deleteCustomer(id);
  }
}

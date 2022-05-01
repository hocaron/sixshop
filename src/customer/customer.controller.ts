import {Controller, Get, Post, Body, Patch, Param, Delete} from '@nestjs/common';
import {CustomerService} from './customer.service';
import {CreateCustomerDto} from './dto/request/create-customer.dto';
import {UpdateCustomerDto} from './dto/request/update-customer.dto';
import {ApiTags} from '@nestjs/swagger';
import {docs} from './customer.docs';

@ApiTags('customer')
@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Post()
  @docs.createCustomer('고객 생성')
  createCustomer(@Body() createCustomerDto: CreateCustomerDto) {
    return this.customerService.createCustomer(createCustomerDto);
  }

  @Get(':id')
  @docs.getCustomer('ID로 고객 조회')
  getCustomer(@Param('id') id: string) {
    return this.customerService.getCustomer(id);
  }

  @Patch(':id')
  @docs.updateCustomer('ID로 고객 정보 업데이트')
  updateCustomer(@Param('id') id: string, @Body() updateCustomerDto: UpdateCustomerDto) {
    return this.customerService.updateCustomer(id, updateCustomerDto);
  }

  @Delete(':id')
  @docs.deleteCustomer('ID로 고객 식제')
  deleteCustomer(@Param('id') id: string) {
    return this.customerService.deleteCustomer(id);
  }
}

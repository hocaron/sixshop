import {Controller, Get, Post, Body, Patch, Param, Delete} from '@nestjs/common';
import {CustomerService} from './customer.service';
import {CreateCustomerRequestDto} from './dto/request/create-customer-request.dto';
import {UpdateCustomerRequestDto} from './dto/request/update-customer-request.dto';
import {ApiTags} from '@nestjs/swagger';
import {docs} from './customer.docs';

@ApiTags('customers')
@Controller('customers')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Post()
  @docs.createCustomer('고객 생성')
  createCustomer(@Body() createCustomerRequestDto: CreateCustomerRequestDto) {
    return this.customerService.createCustomer(createCustomerRequestDto);
  }

  @Get(':id')
  @docs.getCustomer('ID로 고객 조회')
  getCustomer(@Param('id') id: string) {
    return this.customerService.getCustomer(id);
  }

  @Patch(':id')
  @docs.updateCustomer('ID로 고객 정보 업데이트')
  updateCustomer(@Param('id') id: string, @Body() updateCustomerDto: UpdateCustomerRequestDto) {
    return this.customerService.updateCustomer(id, updateCustomerDto);
  }

  @Delete(':id')
  @docs.deleteCustomer('ID로 고객 식제')
  deleteCustomer(@Param('id') id: string) {
    return this.customerService.deleteCustomer(id);
  }
}

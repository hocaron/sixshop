import {Controller, Get, Post, Body, Patch, Param, Delete} from '@nestjs/common';
import {CustomerCustomFieldValueService} from './customer-custom-field-value.service';
import {CreateCustomerCustomFieldValueDto} from './dto/create-customer-custom-field-value.dto';
import {UpdateCustomerCustomFieldValueDto} from './dto/update-customer-custom-field-value.dto';

@Controller('customer-custom-field-value')
export class CustomerCustomFieldValueController {
  constructor(private readonly customerCustomFieldValueService: CustomerCustomFieldValueService) {}

  @Post()
  create(@Body() createCustomerCustomFieldValueDto: CreateCustomerCustomFieldValueDto) {
    return this.customerCustomFieldValueService.create(createCustomerCustomFieldValueDto);
  }

  @Get()
  findAll() {
    return this.customerCustomFieldValueService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customerCustomFieldValueService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCustomerCustomFieldValueDto: UpdateCustomerCustomFieldValueDto,
  ) {
    return this.customerCustomFieldValueService.update(+id, updateCustomerCustomFieldValueDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.customerCustomFieldValueService.remove(+id);
  }
}

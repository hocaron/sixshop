import {Controller, Get, Post, Body, Patch, Param, Delete} from '@nestjs/common';
import {CustomerCustomFieldValueService} from './customer-custom-field-value.service';
import {CreateCustomerCustomFieldValueDto} from './dto/create-customer-custom-field-value.dto';
import {UpdateCustomerCustomFieldValueDto} from './dto/update-customer-custom-field-value.dto';
import {ApiTags} from '@nestjs/swagger';

@ApiTags('customer-custom-field-value')
@Controller('customer-custom-field-value')
export class CustomerCustomFieldValueController {
  constructor(private readonly customerCustomFieldValueService: CustomerCustomFieldValueService) {}

  @Post()
  createCustomerCustomFieldValue(
    @Body() createCustomerCustomFieldValueDto: CreateCustomerCustomFieldValueDto,
  ) {
    return this.customerCustomFieldValueService.createCustomerCustomFieldValue(
      createCustomerCustomFieldValueDto,
    );
  }

  @Get(':customFieldId/:customerId')
  getCustomerCustomFieldValueByCustomerAndStore(
    @Param('customFieldId') customFieldId: string,
    @Param('customerId') customerId: string,
  ) {
    return this.customerCustomFieldValueService.getCustomerCustomFieldValueByCustomerAndStore(
      customFieldId,
      customerId,
    );
  }

  @Get(':customFieldId')
  getAllCustomerCustomFieldValueInStore(@Param('customFieldId') customFieldId: string) {
    return this.customerCustomFieldValueService.getAllCustomerCustomFieldValueInStore(
      customFieldId,
    );
  }

  @Patch(':id')
  updateCustomerCustomFieldValue(
    @Param('id') id: string,
    @Body() updateCustomerCustomFieldValueDto: UpdateCustomerCustomFieldValueDto,
  ) {
    return this.customerCustomFieldValueService.updateCustomerCustomFieldValue(
      id,
      updateCustomerCustomFieldValueDto,
    );
  }

  @Delete(':id')
  deleteCustomerCustomFieldValue(@Param('id') id: string) {
    return this.customerCustomFieldValueService.deleteCustomerCustomFieldValue(id);
  }
}

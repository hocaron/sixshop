import {Controller, Get, Post, Body, Patch, Param, Delete} from '@nestjs/common';
import {CustomerCustomFieldValueService} from './customer-custom-field-value.service';
import {CreateCustomerCustomFieldValueDto} from './dto/create-customer-custom-field-value.dto';
import {UpdateCustomerCustomFieldValueDto} from './dto/update-customer-custom-field-value.dto';
import {ApiTags} from '@nestjs/swagger';
import {docs} from './customer-custom-field.docs';

@ApiTags('customer-custom-field-value')
@Controller('customer-custom-field-value')
export class CustomerCustomFieldValueController {
  constructor(private readonly customerCustomFieldValueService: CustomerCustomFieldValueService) {}

  @Post()
  @docs.createCustomerCustomFieldValue('고객 관련 사용자 정의 필드값 생성')
  createCustomerCustomFieldValue(
    @Body() createCustomerCustomFieldValueDto: CreateCustomerCustomFieldValueDto,
  ) {
    return this.customerCustomFieldValueService.createCustomerCustomFieldValue(
      createCustomerCustomFieldValueDto,
    );
  }

  @Get(':customFieldId/:customerId')
  @docs.getCustomerCustomFieldValueByCustomerAndStore('고객 관련 사용자 정의 필드값 조회')
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
  @docs.getAllCustomerCustomFieldValueInStore('고객 관련 사용자 정의 필드값 조회')
  getAllCustomerCustomFieldValueInStore(@Param('customFieldId') customFieldId: string) {
    return this.customerCustomFieldValueService.getAllCustomerCustomFieldValueInStore(
      customFieldId,
    );
  }

  @Patch(':id')
  @docs.updateCustomerCustomFieldValue('고객 관련 사용자 정의 필드값 업데이트')
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
  @docs.deleteCustomerCustomFieldValue('고객 관련 사용자 정의 필드값 삭제')
  deleteCustomerCustomFieldValue(@Param('id') id: string) {
    return this.customerCustomFieldValueService.deleteCustomerCustomFieldValue(id);
  }
}

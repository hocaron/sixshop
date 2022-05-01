import {Controller, Get, Post, Body, Patch, Param, Delete} from '@nestjs/common';
import {CustomerCustomFieldValueService} from './customer-custom-field-value.service';
import {CreateCustomerCustomFieldValueRequestDto} from './dto/request/create-customer-custom-field-value-request.dto';
import {UpdateCustomerCustomFieldValueRequestDto} from './dto/request/update-customer-custom-field-value-request.dto';
import {ApiTags} from '@nestjs/swagger';
import {docs} from './customer-custom-field.docs';

@ApiTags('customer-custom-field-values')
@Controller('customer-custom-field-values')
export class CustomerCustomFieldValueController {
  constructor(private readonly customerCustomFieldValueService: CustomerCustomFieldValueService) {}

  @Post()
  @docs.createCustomerCustomFieldValue('고객 관련 사용자 정의 필드값 생성')
  createCustomerCustomFieldValue(
    @Body() createCustomerCustomFieldValueRequestDto: CreateCustomerCustomFieldValueRequestDto,
  ) {
    return this.customerCustomFieldValueService.createCustomerCustomFieldValue(
      createCustomerCustomFieldValueRequestDto,
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
    @Body() updateCustomerCustomFieldValueRequestDto: UpdateCustomerCustomFieldValueRequestDto,
  ) {
    return this.customerCustomFieldValueService.updateCustomerCustomFieldValue(
      id,
      updateCustomerCustomFieldValueRequestDto,
    );
  }

  @Delete(':id')
  @docs.deleteCustomerCustomFieldValue('고객 관련 사용자 정의 필드값 삭제')
  deleteCustomerCustomFieldValue(@Param('id') id: string) {
    return this.customerCustomFieldValueService.deleteCustomerCustomFieldValue(id);
  }
}

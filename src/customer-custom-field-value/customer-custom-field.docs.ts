import {applyDecorators} from '@nestjs/common';
import {ApiOperation, ApiResponse, ApiOkResponse, ApiCreatedResponse} from '@nestjs/swagger';
import {BaseDeleteResponseBodyDto} from '../common/dto/base-delete-response-body.dto';
import {SwaggerMethodDoc} from '../common/types';
import {CustomerCustomFieldValueController} from './customer-custom-field-value.controller';
import {CustomerCustomFieldValuesResponseBodyDto} from './dto/response/customer-custom-field-values-response-body.dto';
import {CustomerCustomFieldValueResponseBodyDto} from './dto/response/customer-custom-field-value-response-body.dto';
export const docs: SwaggerMethodDoc<CustomerCustomFieldValueController> = {
  createCustomerCustomFieldValue(summary: string) {
    return applyDecorators(
      ApiOperation({
        summary,
        description: '고객 관련 사용자 정의 필드값을 생성합니다.',
      }),
      ApiCreatedResponse({
        type: CustomerCustomFieldValueResponseBodyDto,
      }),
    );
  },
  getCustomerCustomFieldValueByCustomerAndStore(summary: string) {
    return applyDecorators(
      ApiOperation({
        summary,
        description: 'customFieldId와 customerId로 고객 관련 사용자 정의 필드값를 조회합니다.',
      }),
      ApiOkResponse({
        type: CustomerCustomFieldValueResponseBodyDto,
      }),
    );
  },
  getAllCustomerCustomFieldValueInStore(summary: string) {
    return applyDecorators(
      ApiOperation({
        summary,
        description:
          'customFieldId로 고객 관련 사용자 정의 필드값를 조회합니다. \t\n customFieldId는 상점마다 유일한 값이므로, 해당 필드 정보를 상점별로 조회하는 것과 같습니다.',
      }),
      ApiOkResponse({
        type: CustomerCustomFieldValuesResponseBodyDto,
      }),
      ApiResponse({
        status: 400,
        description: '존재하지 않는 고객 관련 사용자 정의 필드값입니다.',
      }),
    );
  },
  updateCustomerCustomFieldValue(summary: string) {
    return applyDecorators(
      ApiOperation({
        summary,
        description: 'Id로 고객 관련 사용자 정의 필드값 정보를 업데이트합니다.',
      }),
      ApiOkResponse({
        type: CustomerCustomFieldValueResponseBodyDto,
      }),
      ApiResponse({
        status: 400,
        description: '존재하지 않는 고객 관련 사용자 정의 필드값입니다.',
      }),
    );
  },
  deleteCustomerCustomFieldValue(summary: string) {
    return applyDecorators(
      ApiOperation({
        summary,
        description: 'Id로 고객 관련 사용자 정의 필드값를 삭제합니다.',
      }),
      ApiOkResponse({
        type: BaseDeleteResponseBodyDto,
      }),
      ApiResponse({
        status: 400,
        description: '존재하지 않는 고객 관련 사용자 정의 필드값입니다.',
      }),
    );
  },
};

import {applyDecorators} from '@nestjs/common';
import {ApiOperation, ApiResponse, ApiOkResponse, ApiCreatedResponse} from '@nestjs/swagger';
import {BaseDeleteResponseBodyDto} from '../common/dto/base-delete-response-body.dto';
import {SwaggerMethodDoc} from '../common/types';
import {OrderCustomFieldValueController} from './order-custom-field-value.controller';
import {OrderCustomFieldValueResponseBodyDto} from './dto/response/order-custom-field-value-response-body.dto';
import {OrderCustomFieldValuesResponseDto} from './dto/response/order-custom-field-values-response.dto';

export const docs: SwaggerMethodDoc<OrderCustomFieldValueController> = {
  createOrderCustomFieldValue(summary: string) {
    return applyDecorators(
      ApiOperation({
        summary,
        description: '주문 관련 사용자 정의 필드값을 생성합니다.',
      }),
      ApiCreatedResponse({
        type: OrderCustomFieldValueResponseBodyDto,
      }),
    );
  },
  getOrderCustomFieldValueByOrderAndStore(summary: string) {
    return applyDecorators(
      ApiOperation({
        summary,
        description: 'customFieldId와 orderId로 주문 관련 사용자 정의 필드값를 조회합니다.',
      }),
      ApiOkResponse({
        type: OrderCustomFieldValueResponseBodyDto,
      }),
    );
  },
  getAllOrderCustomFieldValueInStore(summary: string) {
    return applyDecorators(
      ApiOperation({
        summary,
        description:
          'customFieldId로 주문 관련 사용자 정의 필드값를 조회합니다. \t\n customFieldId는 상점마다 유일한 값이므로, 해당 필드 정보를 상점별로 조회하는 것과 같습니다.',
      }),
      ApiOkResponse({
        type: OrderCustomFieldValuesResponseDto,
      }),
      ApiResponse({
        status: 400,
        description: '존재하지 않는 주문 관련 사용자 정의 필드값입니다.',
      }),
    );
  },
  updateOrderCustomFieldValue(summary: string) {
    return applyDecorators(
      ApiOperation({
        summary,
        description: 'Id로 주문 관련 사용자 정의 필드값 정보를 업데이트합니다.',
      }),
      ApiOkResponse({
        type: OrderCustomFieldValueResponseBodyDto,
      }),
      ApiResponse({
        status: 400,
        description: '존재하지 않는 주문 관련 사용자 정의 필드값입니다.',
      }),
    );
  },
  deleteOrderCustomFieldValue(summary: string) {
    return applyDecorators(
      ApiOperation({
        summary,
        description: 'Id로 주문 관련 사용자 정의 필드값를 삭제합니다.',
      }),
      ApiOkResponse({
        type: BaseDeleteResponseBodyDto,
      }),
      ApiResponse({
        status: 400,
        description: '존재하지 않는 주문 관련 사용자 정의 필드값입니다.',
      }),
    );
  },
};

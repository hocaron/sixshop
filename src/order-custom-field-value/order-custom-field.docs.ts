import {applyDecorators} from '@nestjs/common';
import {ApiOperation, ApiResponse, ApiOkResponse, ApiCreatedResponse} from '@nestjs/swagger';
import {BaseUpdateResponseBodyDto} from '../common/dto/base-update-response-body.dto';
import {BaseDeleteResponseBodyDto} from '../common/dto/base-delete-response-body.dto';
import {SwaggerMethodDoc} from '../common/types';
import {OrderCustomFieldValueController} from './order-custom-field-value.controller';
import {CreateOrderCustomFieldValueResponseBodyDto} from './dto/create-order-custom-field-value.dto';
import {GetAllOrderCustomFieldValueResponseBodyDto} from './dto/get-all-customer-custom-field-value.dto';
import {GetOrderCustomFieldValueResponseBodyDto} from './dto/get-customer-custom-field-value.dto';

export const docs: SwaggerMethodDoc<OrderCustomFieldValueController> = {
  createOrderCustomFieldValue(summary: string) {
    return applyDecorators(
      ApiOperation({
        summary,
        description: '주문 관련 사용자 정의 필드값을 생성합니다.',
      }),
      ApiCreatedResponse({
        type: CreateOrderCustomFieldValueResponseBodyDto,
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
        type: GetAllOrderCustomFieldValueResponseBodyDto,
      }),
    );
  },
  getAllOrderCustomFieldValueInStore(summary: string) {
    return applyDecorators(
      ApiOperation({
        summary,
        description:
          'customFieldId로 주문 관련 사용자 정의 필드값를 조회합니다. \t\n customFieldId은 상점마다 유일한 값이므로, 헤당 필드를 상점별로 조회하는 .',
      }),
      ApiOkResponse({
        type: GetOrderCustomFieldValueResponseBodyDto,
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
        description: 'ID로 주문 관련 사용자 정의 필드값 정보를 업데이트합니다.',
      }),
      ApiOkResponse({
        type: BaseUpdateResponseBodyDto,
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
        description: 'ID로 주문 관련 사용자 정의 필드값를 삭제합니다.',
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

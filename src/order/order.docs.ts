import {applyDecorators} from '@nestjs/common';
import {ApiOperation, ApiResponse, ApiOkResponse, ApiCreatedResponse} from '@nestjs/swagger';
import {BaseUpdateResponseBodyDto} from '../common/dto/base-update-response-body.dto';
import {BaseDeleteResponseBodyDto} from '../common/dto/base-delete-response-body.dto';
import {SwaggerMethodDoc} from '../common/types';
import {OrderController} from './order.controller';
import {CreateOrderResponseBodyDto} from './dto/create-order.dto';
import {GetOrderResponseBodyDto} from './dto/get-order.dto';

export const docs: SwaggerMethodDoc<OrderController> = {
  createOrder(summary: string) {
    return applyDecorators(
      ApiOperation({
        summary,
        description: '주문을 생성합니다.',
      }),
      ApiCreatedResponse({
        type: CreateOrderResponseBodyDto,
      }),
    );
  },
  getOrder(summary: string) {
    return applyDecorators(
      ApiOperation({
        summary,
        description: 'Id로 주문을 조회합니다.',
      }),
      ApiOkResponse({
        type: GetOrderResponseBodyDto,
      }),
      ApiResponse({
        status: 400,
        description: '존재하지 않는 주문입니다.',
      }),
    );
  },
  updateOrder(summary: string) {
    return applyDecorators(
      ApiOperation({
        summary,
        description: 'ID로 주문 정보를 업데이트합니다.',
      }),
      ApiOkResponse({
        type: BaseUpdateResponseBodyDto,
      }),
      ApiResponse({
        status: 400,
        description: '존재하지 않는 주문입니다.',
      }),
    );
  },
  deleteOrder(summary: string) {
    return applyDecorators(
      ApiOperation({
        summary,
        description: 'ID로 주문을 삭제합니다.',
      }),
      ApiOkResponse({
        type: BaseDeleteResponseBodyDto,
      }),
      ApiResponse({
        status: 400,
        description: '존재하지 않는 주문입니다.',
      }),
    );
  },
};

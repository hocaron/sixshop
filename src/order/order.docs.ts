import {applyDecorators} from '@nestjs/common';
import {ApiOperation, ApiResponse, ApiOkResponse, ApiCreatedResponse} from '@nestjs/swagger';
import {BaseDeleteResponseBodyDto} from '../common/dto/base-delete-response-body.dto';
import {SwaggerMethodDoc} from '../common/types';
import {OrderController} from './order.controller';
import {OrderResponseBodyDto} from './dto/response/order-response-body.dto';

export const docs: SwaggerMethodDoc<OrderController> = {
  createOrder(summary: string) {
    return applyDecorators(
      ApiOperation({
        summary,
        description:
          "주문을 생성합니다. \t\n Status = ['ORDER', 'CANCEL'] \t\n 주문상태 = ORDER : 주문진행 , CANCEL : 주문취소",
      }),
      ApiCreatedResponse({
        type: OrderResponseBodyDto,
      }),
    );
  },
  getOrder(summary: string) {
    return applyDecorators(
      ApiOperation({
        summary,
        description:
          "Id로 주문을 조회합니다. \t\n Status = ['ORDER', 'CANCEL'] \t\n 주문상태 = ORDER : 주문진행 , CANCEL : 주문취소",
      }),
      ApiOkResponse({
        type: OrderResponseBodyDto,
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
        description:
          "Id로 주문 정보를 업데이트합니다. \t\n Status = ['ORDER', 'CANCEL'] \t\n 주문상태 = ORDER : 주문진행 , CANCEL : 주문취소",
      }),
      ApiOkResponse({
        type: OrderResponseBodyDto,
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
        description: 'Id로 주문을 삭제합니다.',
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

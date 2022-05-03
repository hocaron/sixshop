import {applyDecorators} from '@nestjs/common';
import {ApiOperation, ApiResponse, ApiOkResponse, ApiCreatedResponse} from '@nestjs/swagger';
import {BaseDeleteResponseBodyDto} from '../common/dto/base-delete-response-body.dto';
import {SwaggerMethodDoc} from '../common/types';
import {CustomerController} from './customer.controller';
import {CustomerResponseBodyDto} from './dto/response/customer-response-body.dto';

export const docs: SwaggerMethodDoc<CustomerController> = {
  createCustomer(summary: string) {
    return applyDecorators(
      ApiOperation({
        summary,
        description: '고객을 생성합니다.',
      }),
      ApiCreatedResponse({
        type: CustomerResponseBodyDto,
      }),
    );
  },
  getCustomer(summary: string) {
    return applyDecorators(
      ApiOperation({
        summary,
        description: 'Id로 고객을 조회합니다.',
      }),
      ApiOkResponse({
        type: CustomerResponseBodyDto,
      }),
      ApiResponse({
        status: 400,
        description: '존재하지 않는 고객입니다.',
      }),
    );
  },
  updateCustomer(summary: string) {
    return applyDecorators(
      ApiOperation({
        summary,
        description: 'Id로 고객 정보를 업데이트합니다.',
      }),
      ApiOkResponse({
        type: CustomerResponseBodyDto,
      }),
      ApiResponse({
        status: 400,
        description: '존재하지 않는 고객입니다.',
      }),
    );
  },
  deleteCustomer(summary: string) {
    return applyDecorators(
      ApiOperation({
        summary,
        description: 'Id로 고객을 삭제합니다.',
      }),
      ApiOkResponse({
        type: BaseDeleteResponseBodyDto,
      }),
      ApiResponse({
        status: 400,
        description: '존재하지 않는 고객입니다.',
      }),
    );
  },
};

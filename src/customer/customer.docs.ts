import {applyDecorators} from '@nestjs/common';
import {ApiOperation, ApiResponse, ApiOkResponse, ApiCreatedResponse} from '@nestjs/swagger';
import {BaseUpdateResponseBodyDto} from '../common/dto/base-update-response-body.dto';
import {BaseDeleteResponseBodyDto} from '../common/dto/base-delete-response-body.dto';
import {SwaggerMethodDoc} from '../common/types';
import {CustomerController} from './customer.controller';
import {CreateCustomerResponseBodyDto} from './dto/create-customer.dto';
import {GetCustomerResponseBodyDto} from './dto/get-customer.dto';

export const docs: SwaggerMethodDoc<CustomerController> = {
  createCustomer(summary: string) {
    return applyDecorators(
      ApiOperation({
        summary,
        description: '고객을 생성합니다.',
      }),
      ApiCreatedResponse({
        type: CreateCustomerResponseBodyDto,
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
        type: GetCustomerResponseBodyDto,
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
        description: 'ID로 고객 정보를 업데이트합니다.',
      }),
      ApiOkResponse({
        type: BaseUpdateResponseBodyDto,
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
        description: 'ID로 고객을 삭제합니다.',
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

import {applyDecorators} from '@nestjs/common';
import {
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
  ApiOkResponse,
  ApiCreatedResponse,
} from '@nestjs/swagger';
import {StoreController} from './store.controller';
import {SwaggerMethodDoc} from '../common/types';
import {CreateStoreResponseBodyDto} from './dto/create-store.dto';
import {GetAllStoreResponseBodyDto} from './dto/get-all-store.dto';
import {GetStoreResponseBodyDto} from './dto/get-store.dto';
import {BaseUpdateResponseBodyDto} from '../common/dtos/base-update-response-body.dto';
import {BaseDeleteResponseBodyDto} from './../common/dtos/base-delete-response-body.dto';

export const docs: SwaggerMethodDoc<StoreController> = {
  createStore(summary: string) {
    return applyDecorators(
      ApiBearerAuth(),
      ApiOperation({
        summary,
        description: '상점을 생성합니다.',
      }),
      ApiCreatedResponse({
        type: CreateStoreResponseBodyDto,
      }),
      ApiResponse({
        status: 400,
        description: '이미 존재하는 상점 이름입니다.',
      }),
    );
  },
  getAllStores(summary: string) {
    return applyDecorators(
      ApiBearerAuth(),
      ApiOperation({
        summary,
        description: '모든 상점을 조회합니다',
      }),
      ApiOkResponse({
        type: GetAllStoreResponseBodyDto,
      }),
    );
  },
  getStore(summary: string) {
    return applyDecorators(
      ApiBearerAuth(),
      ApiOperation({
        summary,
        description: 'ID로 상점을 조회합니다.',
      }),
      ApiOkResponse({
        type: GetStoreResponseBodyDto,
      }),
      ApiResponse({
        status: 400,
        description: '존재하지 않는 상점입니다.',
      }),
    );
  },
  updateStore(summary: string) {
    return applyDecorators(
      ApiBearerAuth(),
      ApiOperation({
        summary,
        description: 'ID로 상점 정보를 업데이트합니다.',
      }),
      ApiOkResponse({
        type: BaseUpdateResponseBodyDto,
      }),
      ApiResponse({
        status: 400,
        description: '존재하지 않는 상점입니다.',
      }),
    );
  },
  deleteStore(summary: string) {
    return applyDecorators(
      ApiBearerAuth(),
      ApiOperation({
        summary,
        description: 'ID로 상점을 삭제합니다.',
      }),
      ApiOkResponse({
        type: BaseDeleteResponseBodyDto,
      }),
      ApiResponse({
        status: 400,
        description: '존재하지 않는 상점입니다.',
      }),
    );
  },
};

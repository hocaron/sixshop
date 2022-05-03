import {applyDecorators} from '@nestjs/common';
import {ApiOperation, ApiResponse, ApiOkResponse, ApiCreatedResponse} from '@nestjs/swagger';
import {StoreController} from './store.controller';
import {SwaggerMethodDoc} from '../common/types';
import {BaseDeleteResponseBodyDto} from '../common/dto/base-delete-response-body.dto';
import {StoreResponseBodyDto} from './dto/response/store-response-body.dto';
import {StoresResponseBodyDto} from './dto/response/stores-response-body.dto';

export const docs: SwaggerMethodDoc<StoreController> = {
  createStore(summary: string) {
    return applyDecorators(
      ApiOperation({
        summary,
        description: '상점을 생성합니다.',
      }),
      ApiCreatedResponse({
        type: StoreResponseBodyDto,
      }),
      ApiResponse({
        status: 400,
        description: '이미 존재하는 상점 이름입니다.',
      }),
    );
  },
  getAllStores(summary: string) {
    return applyDecorators(
      ApiOperation({
        summary,
        description: '모든 상점을 조회합니다',
      }),
      ApiOkResponse({
        type: StoresResponseBodyDto,
      }),
    );
  },
  getStore(summary: string) {
    return applyDecorators(
      ApiOperation({
        summary,
        description: 'Id로 상점을 조회합니다.',
      }),
      ApiOkResponse({
        type: StoreResponseBodyDto,
      }),
      ApiResponse({
        status: 400,
        description: '존재하지 않는 상점입니다.',
      }),
    );
  },
  updateStore(summary: string) {
    return applyDecorators(
      ApiOperation({
        summary,
        description: 'Id로 상점 정보를 업데이트합니다.',
      }),
      ApiOkResponse({
        type: StoreResponseBodyDto,
      }),
      ApiResponse({
        status: 400,
        description: '존재하지 않는 상점입니다.',
      }),
    );
  },
  deleteStore(summary: string) {
    return applyDecorators(
      ApiOperation({
        summary,
        description: 'Id로 상점을 삭제합니다.',
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

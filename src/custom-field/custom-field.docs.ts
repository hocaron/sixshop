import {applyDecorators} from '@nestjs/common';
import {ApiOperation, ApiResponse, ApiOkResponse, ApiCreatedResponse} from '@nestjs/swagger';
import {BaseUpdateResponseBodyDto} from '../common/dtos/base-update-response-body.dto';
import {BaseDeleteResponseBodyDto} from '../common/dtos/base-delete-response-body.dto';
import {CustomFieldController} from './custom-field.controller';
import {SwaggerMethodDoc} from '../common/types';
import {CreateCustomFieldResponseBodyDto} from './dto/create-custom-field.dto';
import {GetAllCustomFieldResponseBodyDto} from './dto/get-all-custom-field.dto';
import {GetCustomFieldResponseBodyDto} from './dto/get-custom-field.dto';

export const docs: SwaggerMethodDoc<CustomFieldController> = {
  createCustomField(summary: string) {
    return applyDecorators(
      ApiOperation({
        summary,
        description: '사용자 정의 필드를 생성합니다.',
      }),
      ApiCreatedResponse({
        type: CreateCustomFieldResponseBodyDto,
      }),
      ApiResponse({
        status: 400,
        description: '이미 존재하는 사용자 정의 필드 이름입니다.',
      }),
    );
  },
  getAllCustomField(summary: string) {
    return applyDecorators(
      ApiOperation({
        summary,
        description: '모든 사용자 정의 필드를 조회합니다',
      }),
      ApiOkResponse({
        type: GetAllCustomFieldResponseBodyDto,
      }),
    );
  },
  getCustomField(summary: string) {
    return applyDecorators(
      ApiOperation({
        summary,
        description: 'ID로 사용자 정의 필드를 조회합니다.',
      }),
      ApiOkResponse({
        type: GetCustomFieldResponseBodyDto,
      }),
      ApiResponse({
        status: 400,
        description: '존재하지 않는 사용자 정의 필드입니다.',
      }),
    );
  },
  updateCustomField(summary: string) {
    return applyDecorators(
      ApiOperation({
        summary,
        description: 'ID로 사용자 정의 필드 정보를 업데이트합니다.',
      }),
      ApiOkResponse({
        type: BaseUpdateResponseBodyDto,
      }),
      ApiResponse({
        status: 400,
        description: '존재하지 않는 사용자 정의 필드입니다.',
      }),
    );
  },
  removeCustomField(summary: string) {
    return applyDecorators(
      ApiOperation({
        summary,
        description: 'ID로 사용자 정의 필드를 삭제합니다.',
      }),
      ApiOkResponse({
        type: BaseDeleteResponseBodyDto,
      }),
      ApiResponse({
        status: 400,
        description: '존재하지 않는 사용자 정의 필드입니다.',
      }),
    );
  },
};

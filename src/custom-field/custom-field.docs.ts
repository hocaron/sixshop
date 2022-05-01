import {applyDecorators} from '@nestjs/common';
import {ApiOperation, ApiResponse, ApiOkResponse, ApiCreatedResponse} from '@nestjs/swagger';
import {BaseUpdateResponseBodyDto} from '../common/dto/base-update-response-body.dto';
import {BaseDeleteResponseBodyDto} from '../common/dto/base-delete-response-body.dto';
import {CustomFieldController} from './custom-field.controller';
import {SwaggerMethodDoc} from '../common/types';
import {CustomFieldResponseDto} from './dto/response/custom-field-response.dto';
import {CustomFieldsResponseBodyDto} from './dto/response/custom-fields-response-body.dto';
import {CustomFieldResponseBodyDto} from './dto/response/custom-field-response-body.dto';

export const docs: SwaggerMethodDoc<CustomFieldController> = {
  createCustomField(summary: string) {
    return applyDecorators(
      ApiOperation({
        summary,
        description:
          "사용자 정의 필드를 생성합니다. \t\n FieldType =['STRING', 'NUMBER', 'BOOLEAN', 'ARRAY', 'DATE'] \t\n ENUM 은 FieldType 'ARRAY'를 선택해주세요. \t\n 'ARRAY'를 선택한 경우, 'arrayValue' 데이터를 보내주세요. \t\n 해당 데이터 형식은 다음과 같습니다. [{'value' : 'male', 'description' : '남자'}, {'value' : 'female', 'description' : '여자'}] \t\n value : enum 값, description : enum 값에 대한 설명",
      }),
      ApiCreatedResponse({
        type: CustomFieldResponseBodyDto,
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
        type: CustomFieldsResponseBodyDto,
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
        type: CustomFieldResponseBodyDto,
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
        type: CustomFieldResponseBodyDto,
      }),
      ApiResponse({
        status: 400,
        description: '존재하지 않는 사용자 정의 필드입니다.',
      }),
    );
  },
  deleteCustomField(summary: string) {
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

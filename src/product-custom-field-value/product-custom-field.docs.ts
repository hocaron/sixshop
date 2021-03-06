import {applyDecorators} from '@nestjs/common';
import {ApiOperation, ApiResponse, ApiOkResponse, ApiCreatedResponse} from '@nestjs/swagger';
import {BaseDeleteResponseBodyDto} from '../common/dto/base-delete-response-body.dto';
import {SwaggerMethodDoc} from '../common/types';
import {ProductCustomFieldValueController} from './product-custom-field-value.controller';
import {ProductCustomFieldValueResponseBodyDto} from './dto/response/product-custom-field-value-response-body.dto';
import {ProductCustomFieldValuesResponseBodyDto} from './dto/response/product-custom-field-values-response-body.dto';

export const docs: SwaggerMethodDoc<ProductCustomFieldValueController> = {
  createProductCustomFieldValue(summary: string) {
    return applyDecorators(
      ApiOperation({
        summary,
        description: '상품 관련 사용자 정의 필드값을 생성합니다.',
      }),
      ApiCreatedResponse({
        type: ProductCustomFieldValueResponseBodyDto,
      }),
    );
  },
  getProductCustomFieldValueByProductAndStore(summary: string) {
    return applyDecorators(
      ApiOperation({
        summary,
        description: 'customFieldId와 productId로 상품 관련 사용자 정의 필드값를 조회합니다.',
      }),
      ApiOkResponse({
        type: ProductCustomFieldValueResponseBodyDto,
      }),
    );
  },
  getAllProductCustomFieldValueInStore(summary: string) {
    return applyDecorators(
      ApiOperation({
        summary,
        description:
          'customFieldId로 상품 관련 사용자 정의 필드값를 조회합니다. \t\n customFieldId은 상점마다 유일한 값이므로, 해당 필드 정보를 상점별로 조회하는 것과 같습니다.',
      }),
      ApiOkResponse({
        type: ProductCustomFieldValuesResponseBodyDto,
      }),
      ApiResponse({
        status: 400,
        description: '존재하지 않는 상품 관련 사용자 정의 필드값입니다.',
      }),
    );
  },
  updateProductCustomFieldValue(summary: string) {
    return applyDecorators(
      ApiOperation({
        summary,
        description: 'Id로 상품 관련 사용자 정의 필드값 정보를 업데이트합니다.',
      }),
      ApiOkResponse({
        type: ProductCustomFieldValueResponseBodyDto,
      }),
      ApiResponse({
        status: 400,
        description: '존재하지 않는 상품 관련 사용자 정의 필드값입니다.',
      }),
    );
  },
  deleteProductCustomFieldValue(summary: string) {
    return applyDecorators(
      ApiOperation({
        summary,
        description: 'Id로 상품 관련 사용자 정의 필드값를 삭제합니다.',
      }),
      ApiOkResponse({
        type: BaseDeleteResponseBodyDto,
      }),
      ApiResponse({
        status: 400,
        description: '존재하지 않는 상품 관련 사용자 정의 필드값입니다.',
      }),
    );
  },
};

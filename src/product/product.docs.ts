import {applyDecorators} from '@nestjs/common';
import {ApiOperation, ApiResponse, ApiOkResponse, ApiCreatedResponse} from '@nestjs/swagger';
import {BaseDeleteResponseBodyDto} from '../common/dto/base-delete-response-body.dto';
import {SwaggerMethodDoc} from '../common/types';
import {ProductController} from './product.controller';
import {ProductsResponseBodyDto} from './dto/response/products-response-body.dto';
import {ProductReponseBodyDto} from './dto/response/product-reponse-body.dto';

export const docs: SwaggerMethodDoc<ProductController> = {
  createProduct(summary: string) {
    return applyDecorators(
      ApiOperation({
        summary,
        description: '상품을 생성합니다.',
      }),
      ApiCreatedResponse({
        type: ProductReponseBodyDto,
      }),
    );
  },
  getAllProductInStore(summary: string) {
    return applyDecorators(
      ApiOperation({
        summary,
        description: '상점에 속한 모든 상품을 조회합니다.',
      }),
      ApiOkResponse({
        type: ProductsResponseBodyDto,
      }),
    );
  },
  getProduct(summary: string) {
    return applyDecorators(
      ApiOperation({
        summary,
        description: 'ID로 상품을 조회합니다.',
      }),
      ApiOkResponse({
        type: ProductReponseBodyDto,
      }),
      ApiResponse({
        status: 400,
        description: '존재하지 않는 상품입니다.',
      }),
    );
  },
  updateProduct(summary: string) {
    return applyDecorators(
      ApiOperation({
        summary,
        description: 'ID로 상품 정보을 업데이트합니다.',
      }),
      ApiOkResponse({
        type: ProductReponseBodyDto,
      }),
      ApiResponse({
        status: 400,
        description: '존재하지 않는 상품입니다.',
      }),
    );
  },
  deleteProduct(summary: string) {
    return applyDecorators(
      ApiOperation({
        summary,
        description: 'ID로 상품을 삭제합니다.',
      }),
      ApiOkResponse({
        type: BaseDeleteResponseBodyDto,
      }),
      ApiResponse({
        status: 400,
        description: '존재하지 않는 상품입니다.',
      }),
    );
  },
};

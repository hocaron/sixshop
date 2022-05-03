import {applyDecorators} from '@nestjs/common';
import {ApiOperation, ApiResponse, ApiOkResponse, ApiCreatedResponse} from '@nestjs/swagger';
import {BaseDeleteResponseBodyDto} from '../common/dto/base-delete-response-body.dto';
import {SwaggerMethodDoc} from '../common/types';
import {CategoryController} from './category.controller';
import {CategoryResponseBodyDto} from './dto/response/category-response-body.dto';
import {CategoriesResponseBodyDto} from './dto/response/categories-response-body.dto';

export const docs: SwaggerMethodDoc<CategoryController> = {
  createCategory(summary: string) {
    return applyDecorators(
      ApiOperation({
        summary,
        description: '카테고리를 생성합니다.',
      }),
      ApiCreatedResponse({
        type: CategoryResponseBodyDto,
      }),
    );
  },
  getAllCategories(summary: string) {
    return applyDecorators(
      ApiOperation({
        summary,
        description: '모든 카테고리를 조회합니다.',
      }),
      ApiOkResponse({
        type: CategoriesResponseBodyDto,
      }),
    );
  },
  getCategory(summary: string) {
    return applyDecorators(
      ApiOperation({
        summary,
        description: 'Id로 카테고리를 조회합니다.',
      }),
      ApiOkResponse({
        type: CategoryResponseBodyDto,
      }),
      ApiResponse({
        status: 400,
        description: '존재하지 않는 카테고리입니다.',
      }),
    );
  },
  updateCategory(summary: string) {
    return applyDecorators(
      ApiOperation({
        summary,
        description: 'Id로 카테고리 정보를 업데이트합니다.',
      }),
      ApiOkResponse({
        type: CategoryResponseBodyDto,
      }),
      ApiResponse({
        status: 400,
        description: '존재하지 않는 카테고리입니다.',
      }),
    );
  },
  deleteCategory(summary: string) {
    return applyDecorators(
      ApiOperation({
        summary,
        description: 'Id로 카테고리를 삭제합니다.',
      }),
      ApiOkResponse({
        type: BaseDeleteResponseBodyDto,
      }),
      ApiResponse({
        status: 400,
        description: '존재하지 않는 카테고리입니다.',
      }),
    );
  },
};

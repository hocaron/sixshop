import {applyDecorators} from '@nestjs/common';
import {ApiOperation, ApiResponse, ApiOkResponse, ApiCreatedResponse} from '@nestjs/swagger';
import {BaseUpdateResponseBodyDto} from '../common/dto/base-update-response-body.dto';
import {BaseDeleteResponseBodyDto} from '../common/dto/base-delete-response-body.dto';
import {SwaggerMethodDoc} from '../common/types';
import {CategoryController} from './category.controller';
import {CreateCategoryResponseBodyDto} from './dto/create-category.dto';
import {GetCategoryResponseBodyDto} from './dto/get-category.dto';
import {GetAllCategoryResponseBodyDto} from './dto/get-all-category.dto';

export const docs: SwaggerMethodDoc<CategoryController> = {
  createCategory(summary: string) {
    return applyDecorators(
      ApiOperation({
        summary,
        description: '카테고리를 생성합니다.',
      }),
      ApiCreatedResponse({
        type: CreateCategoryResponseBodyDto,
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
        type: GetAllCategoryResponseBodyDto,
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
        type: GetCategoryResponseBodyDto,
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
        description: 'ID로 카테고리 정보를 업데이트합니다.',
      }),
      ApiOkResponse({
        type: BaseUpdateResponseBodyDto,
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
        description: 'ID로 카테고리를 삭제합니다.',
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

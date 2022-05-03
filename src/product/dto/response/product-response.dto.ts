import {ApiProperty} from '@nestjs/swagger';
import {Store} from 'src/store/schemas/store.schema';
import {Category} from 'src/category/schemas/category.schema';
import mongoose from 'mongoose';
import {CustomField} from 'src/custom-field/schemas/custom-field.schema';

export class ProductResponseDto {
  @ApiProperty({example: 'a1s2d3f4g5', description: '상품 ID'})
  id: mongoose.Types.ObjectId;

  @ApiProperty({example: 'testProoduct', description: '상품 이름'})
  name: string;

  @ApiProperty({example: '10000', description: '상품 가격'})
  price: number;

  @ApiProperty({example: '1a2s3d4f', description: '상점 ID'})
  storeId: Store;

  @ApiProperty({example: '["1a2s3d4f"]', description: '카테고리들 ID'})
  categoryIds: Category[];

  @ApiProperty({example: '["1a2s3d4f"]', description: '상품 관련 사용자 정의 필드 ID'})
  productCustomFieldIds: CustomField[];
}

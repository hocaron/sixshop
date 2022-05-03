import {ApiProperty} from '@nestjs/swagger';
import {CustomField} from '../../../custom-field/schemas/custom-field.schema';
import {Product} from '../../../product/schemas/product.schema';
import mongoose from 'mongoose';

export class ProductCustomFieldValueResponseDto {
  @ApiProperty({example: 'a1s2d3f4g5', description: '사용자 정의 필드 ID'})
  id: mongoose.Types.ObjectId;

  @ApiProperty({
    example: 'testProductCustomFieldValue',
    description: '상품 관련 사용자 정의 필드의 값',
  })
  value: string;

  @ApiProperty({example: '1a2s3d4f', description: '상품 ID'})
  productId: Product;

  @ApiProperty({example: '1a2s3d4f', description: '사용자 정의 필드 ID'})
  customFieldId: CustomField;
}

import {ApiProperty} from '@nestjs/swagger';
import {CustomField} from '../../../custom-field/schemas/custom-field.schema';
import {Product} from '../../../product/schemas/product.schema';

export class CreateProductCustomFieldValueRequestDto {
  @ApiProperty({example: '유통기한', description: '상품 관련 사용자 정의 필드의 값'})
  value: string;

  @ApiProperty({example: '1a2s3d4f', description: '상품 ID'})
  productId: Product;

  @ApiProperty({example: '1a2s3d4f', description: '사용자 정의 필드 ID'})
  customFieldId: CustomField;
}

import {ApiProperty} from '@nestjs/swagger';
import {BasePostReponseBodyDto} from '../../common/dto/base-post-response-body.dto';
import {CustomField} from './../../custom-field/schemas/custom-field.schema';
import {Product} from 'src/product/schemas/product.schema';

export class CreateProductCustomFieldValueDto {
  @ApiProperty({example: '유통기한', description: '상품 관련 사용자 정의 필드의 값'})
  value: string;

  @ApiProperty({example: '1a2s3d4f', description: '상품 ID'})
  productId: Product;

  @ApiProperty({example: '1a2s3d4f', description: '사용자 정의 필드 ID'})
  customFieldId: CustomField;
}

export class CreateProductCustomFieldValueResponseDto {
  @ApiProperty({example: '유통기한', description: '상품 관련 사용자 정의 필드의 값'})
  value: string;

  @ApiProperty({example: '1a2s3d4f', description: '상품 ID'})
  productId: Product;

  @ApiProperty({example: '1a2s3d4f', description: '사용자 정의 필드 ID'})
  customFieldId: CustomField;

  @ApiProperty({example: 'a1s2d3f4g5', description: '사용자 정의 필드 ID'})
  _id: string;
}

export class CreateProductCustomFieldValueResponseBodyDto extends BasePostReponseBodyDto {
  @ApiProperty()
  data: CreateProductCustomFieldValueResponseDto;
}

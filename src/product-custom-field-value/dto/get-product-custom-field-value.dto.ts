import {ApiProperty} from '@nestjs/swagger';
import {Product} from 'src/product/schemas/product.schema';
import {BaseGetReponseBodyDto} from '../../common/dto/base-get-response-body.dto';
import {CustomField} from '../../custom-field/schemas/custom-field.schema';

export class GetProductCustomFieldValueResponseDto {
  @ApiProperty({example: 'a1s2d3f4g5', description: '사용자 정의 필드 ID'})
  _id: string;

  @ApiProperty({example: '유통기한', description: '상품 관련 사용자 정의 필드의 값'})
  value: string;

  @ApiProperty({example: '1a2s3d4f', description: '상품 ID'})
  productId: Product;

  @ApiProperty({example: '1a2s3d4f', description: '사용자 정의 필드 ID'})
  customFieldId: CustomField;
}

export class GetProductCustomFieldValueResponseBodyDto extends BaseGetReponseBodyDto {
  @ApiProperty()
  data: GetProductCustomFieldValueResponseDto;
}

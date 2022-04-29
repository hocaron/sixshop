import {ApiProperty} from '@nestjs/swagger';
import {CustomField} from 'src/custom-field/schemas/custom-field.schema';
import {BasePostReponseBodyDto} from '../../common/dto/base-post-response-body.dto';

export class CreateStoreDto {
  @ApiProperty({example: 'sixshop', description: '상점 이름'})
  name: string;

  @ApiProperty({example: '["1a2s3d4f"]', description: '고객 관련 사용자 정의 필드 ID'})
  customerCustomFieldIds: CustomField[];

  @ApiProperty({example: '["1a2s3d4f"]', description: '상품 관련 사용자 정의 필드 ID'})
  productCustomFieldIds: CustomField[];

  @ApiProperty({example: '["1a2s3d4f"]', description: '주문 관련 사용자 정의 필드 ID'})
  orderCustomFieldIds: CustomField[];
}

export class CreateStoreResponseDto {
  @ApiProperty({example: 'sixshop', description: '상점 이름'})
  name: string;

  @ApiProperty({example: '["1a2s3d4f"]', description: '고객 관련 사용자 정의 필드 ID'})
  customerCustomFieldIds: CustomField[];

  @ApiProperty({example: '["1a2s3d4f"]', description: '상품 관련 사용자 정의 필드 ID'})
  productCustomFieldIds: CustomField[];

  @ApiProperty({example: '["1a2s3d4f"]', description: '주문 관련 사용자 정의 필드 ID'})
  orderCustomFieldIds: CustomField[];

  @ApiProperty({example: 'a1s2d3f4g5', description: '상점 ID'})
  _id: string;
}

export class CreateStoreResponseBodyDto extends BasePostReponseBodyDto {
  @ApiProperty()
  data: CreateStoreResponseDto;
}

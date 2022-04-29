import {ApiProperty} from '@nestjs/swagger';
import {BaseGetReponseBodyDto} from '../../common/dto/base-get-response-body.dto';
import {CustomField} from './../../custom-field/schemas/custom-field.schema';

export class GetStoreResponseDto {
  @ApiProperty({example: 'a1s2d3f4g5', description: '상점 ID'})
  _id: string;

  @ApiProperty({example: 'sixshop', description: '상점 이름'})
  name: string;

  @ApiProperty({example: '["1a2s3d4f"]', description: '고객 관련 사용자 정의 필드 ID'})
  customerCustomFieldIds: CustomField[];

  @ApiProperty({example: '["1a2s3d4f"]', description: '상품 관련 사용자 정의 필드 ID'})
  productCustomFieldIds: CustomField[];

  @ApiProperty({example: '["1a2s3d4f"]', description: '주문 관련 사용자 정의 필드 ID'})
  orderCustomFieldIds: CustomField[];
}

export class GetStoreResponseBodyDto extends BaseGetReponseBodyDto {
  @ApiProperty()
  data: GetStoreResponseDto;
}

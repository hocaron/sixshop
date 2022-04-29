import {ApiProperty} from '@nestjs/swagger';
import {BasePostReponseBodyDto} from '../../common/dto/base-post-response-body.dto';
import {CustomField} from './../../custom-field/schemas/custom-field.schema';
import {Order} from './../../order/schemas/order.schema';

export class CreateOrderCustomFieldValueDto {
  @ApiProperty({example: '01012341234', description: '주문 관련 사용자 정의 필드의 값'})
  value: string;

  @ApiProperty({example: '1a2s3d4f', description: '주문 ID'})
  orderId: Order;

  @ApiProperty({example: '1a2s3d4f', description: '사용자 정의 필드 ID'})
  customFieldId: CustomField;
}

export class CreateOrderCustomFieldValueResponseDto {
  @ApiProperty({example: '01012341234', description: '주문 관련 사용자 정의 필드의 값'})
  value: string;

  @ApiProperty({example: '1a2s3d4f', description: '주문 ID'})
  orderId: Order;

  @ApiProperty({example: '1a2s3d4f', description: '사용자 정의 필드 ID'})
  customFieldId: CustomField;

  @ApiProperty({example: 'a1s2d3f4g5', description: '사용자 정의 필드 ID'})
  _id: string;
}

export class CreateOrderCustomFieldValueResponseBodyDto extends BasePostReponseBodyDto {
  @ApiProperty()
  data: CreateOrderCustomFieldValueResponseDto;
}

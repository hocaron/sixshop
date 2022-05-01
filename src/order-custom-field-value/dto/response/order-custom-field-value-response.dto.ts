import {ApiProperty} from '@nestjs/swagger';
import {Order} from '../../../order/schemas/order.schema';
import {CustomField} from '../../../custom-field/schemas/custom-field.schema';

export class OrderCustomFieldValueResponseDto {
  @ApiProperty({example: 'a1s2d3f4g5', description: '사용자 정의 필드 ID'})
  _id: string;

  @ApiProperty({example: '01012341234', description: '고객 관련 사용자 정의 필드의 값'})
  value: string;

  @ApiProperty({example: '1a2s3d4f', description: '고객 ID'})
  orderId: Order;

  @ApiProperty({example: '1a2s3d4f', description: '사용자 정의 필드 ID'})
  customFieldId: CustomField;
}

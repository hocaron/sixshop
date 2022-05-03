import {ApiProperty} from '@nestjs/swagger';
import {Order} from '../../../order/schemas/order.schema';
import {CustomField} from '../../../custom-field/schemas/custom-field.schema';
import mongoose from 'mongoose';

export class OrderCustomFieldValueResponseDto {
  @ApiProperty({example: 'a1s2d3f4g5', description: '사용자 정의 필드 ID'})
  id: mongoose.Types.ObjectId;

  @ApiProperty({
    example: 'testOrderCustomFieldValue',
    description: '주문 관련 사용자 정의 필드의 값',
  })
  value: string;

  @ApiProperty({example: '1a2s3d4f', description: '주문 ID'})
  orderId: Order;

  @ApiProperty({example: '1a2s3d4f', description: '사용자 정의 필드 ID'})
  customFieldId: CustomField;
}

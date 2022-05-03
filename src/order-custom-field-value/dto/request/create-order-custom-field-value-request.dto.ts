import {ApiProperty} from '@nestjs/swagger';
import {CustomField} from '../../../custom-field/schemas/custom-field.schema';
import {Order} from '../../../order/schemas/order.schema';

export class CreateOrderCustomFieldValueRequestDto {
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

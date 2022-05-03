import {IsEnum} from 'class-validator';
import {Status} from '../../schemas/order.schema';
import {ApiProperty} from '@nestjs/swagger';
import {Store} from '../../../store/schemas/store.schema';
import {Customer} from '../../../customer/schemas/customer.schema';
import {Product} from '../../../product/schemas/product.schema';
import mongoose from 'mongoose';

export class OrderResponseDto {
  @ApiProperty({example: 'a1s2d3f4g5', description: '상점 ID'})
  id: mongoose.Types.ObjectId;

  @IsEnum(Status)
  @ApiProperty({example: 'ORDER', enum: Status, description: '주문 상태'})
  status: Status;

  @ApiProperty({example: '10000', description: '주문 총 가격'})
  price: number;

  @ApiProperty({example: 'a1s2d3f4g5', description: '상점 ID'})
  storeId: Store;

  @ApiProperty({example: 'a1s2d3f4g5', description: '고객 ID'})
  customerId: Customer;

  @ApiProperty({example: '["a1s2d3f4g5", "a1s2d3f4g5"]', description: '상품들 ID'})
  productIds: Product[];
}

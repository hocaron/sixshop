import {ApiProperty} from '@nestjs/swagger';
import {Store} from 'src/store/schemas/store.schema';
import {Customer} from 'src/customer/schemas/customer.schema';
import {Product} from 'src/product/schemas/product.schema';
import {IsEnum} from 'class-validator';
import {Status} from '../../schemas/order.schema';

export class CreateOrderRequestDto {
  @IsEnum(Status)
  @ApiProperty({example: 'ORDER', enum: Status, description: '주문 상태'})
  status: Status;

  @ApiProperty({example: '10000', description: '주문 총 가격'})
  price: number;

  @ApiProperty({example: 'sixshop', description: '상점 ID'})
  storeId: Store;

  @ApiProperty({example: 'sixshop', description: '고객 ID'})
  customerId: Customer;

  @ApiProperty({example: 'sixshop', description: '상품들 ID'})
  productIds: Product[];
}

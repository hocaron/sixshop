import {ApiProperty} from '@nestjs/swagger';
import {BaseGetReponseBodyDto} from '../../common/dto/base-get-response-body.dto';
import {IsEnum} from 'class-validator';
import {Status} from '../schemas/order.schema';
import {Store} from 'src/store/schemas/store.schema';
import {Customer} from 'src/customer/schemas/customer.schema';
import {Product} from 'src/product/schemas/product.schema';

export class GetOrderResponseDto {
  @ApiProperty({example: 'a1s2d3f4g5', description: '상점 ID'})
  _id: string;

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

export class GetOrderResponseBodyDto extends BaseGetReponseBodyDto {
  @ApiProperty()
  data: GetOrderResponseDto;
}

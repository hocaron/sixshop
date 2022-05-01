import {Injectable} from '@nestjs/common';
import {Order} from './schemas/order.schema';
import {OrderResponseDto} from './dto/response/order-response.dto';

@Injectable()
export class OrderMapper {
  toResponse(entity: Order): OrderResponseDto {
    return {
      _id: entity.id,
      status: entity.status,
      price: entity.price,
      storeId: entity.storeId,
      customerId: entity.customerId,
      productIds: entity.productIds,
    };
  }
}

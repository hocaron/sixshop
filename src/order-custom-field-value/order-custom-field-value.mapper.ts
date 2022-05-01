import {Injectable} from '@nestjs/common';
import {OrderCustomFieldValue} from './schemas/order-custom-field-value.schema';
import {OrderCustomFieldValueResponseDto} from './dto/response/order-custom-field-value-response.dto';

@Injectable()
export class OrderCustomFieldValueMapper {
  toResponse(entity: OrderCustomFieldValue): OrderCustomFieldValueResponseDto {
    return {
      _id: entity.id,
      value: entity.value,
      orderId: entity.orderId,
      customFieldId: entity.customFieldId,
    };
  }
}

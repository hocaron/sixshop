import {Injectable} from '@nestjs/common';
import {Store} from './schemas/store.schema';
import {StoreResponseDto} from './dto/response/store-response.dto';

@Injectable()
export class StoreMapper {
  toResponse(entity: Store): StoreResponseDto {
    return {
      id: entity._id,
      name: entity.name,
      customerCustomFieldIds: entity.customerCustomFieldIds,
      productCustomFieldIds: entity.productCustomFieldIds,
      orderCustomFieldIds: entity.orderCustomFieldIds,
    };
  }
}

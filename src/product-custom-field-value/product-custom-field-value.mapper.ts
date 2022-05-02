import {Injectable} from '@nestjs/common';
import {ProductCustomFieldValue} from './schemas/product-custom-field-value.schema';
import {ProductCustomFieldValueResponseDto} from './dto/response/product-custom-field-value-response.dto';

@Injectable()
export class ProductCustomFieldValueMapper {
  toResponse(entity: ProductCustomFieldValue): ProductCustomFieldValueResponseDto {
    return {
      id: entity._id,
      value: entity.value,
      productId: entity.productId,
      customFieldId: entity.customFieldId,
    };
  }
}

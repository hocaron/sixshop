import {Injectable} from '@nestjs/common';
import {Product} from './schemas/product.schema';
import {ProductResponseDto} from './dto/response/product-response.dto';

@Injectable()
export class ProductMapper {
  toResponse(entity: Product): ProductResponseDto {
    return {
      id: entity._id,
      name: entity.name,
      price: entity.price,
      storeId: entity.storeId,
      categoryIds: entity.categoryIds,
      productCustomFieldIds: entity.productCustomFieldIds,
    };
  }
}

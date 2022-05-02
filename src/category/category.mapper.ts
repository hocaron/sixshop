import {Injectable} from '@nestjs/common';
import {CategoryResponseDto} from './dto/response/category-response.dto';
import {Category} from './schemas/category.schema';

@Injectable()
export class CategoryMapper {
  toResponse(entity: Category): CategoryResponseDto {
    return {
      id: entity._id,
      name: entity.name,
      description: entity.description,
    };
  }
}

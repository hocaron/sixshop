import {PartialType} from '@nestjs/swagger';
import {CreateProductCustomFieldValueRequestDto} from './create-product-custom-field-value-request.dto';

export class UpdateProductCustomFieldValueRequestDto extends PartialType(
  CreateProductCustomFieldValueRequestDto,
) {}

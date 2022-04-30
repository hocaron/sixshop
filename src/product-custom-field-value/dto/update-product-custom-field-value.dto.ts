import {PartialType} from '@nestjs/swagger';
import {CreateProductCustomFieldValueDto} from './create-product-custom-field-value.dto';

export class UpdateProductCustomFieldValueDto extends PartialType(
  CreateProductCustomFieldValueDto,
) {}

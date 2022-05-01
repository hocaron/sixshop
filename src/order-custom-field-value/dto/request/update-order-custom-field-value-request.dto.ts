import {PartialType} from '@nestjs/swagger';
import {CreateOrderCustomFieldValueRequestDto} from './create-order-custom-field-value-request.dto';

export class UpdateOrderCustomFieldValueRequestDto extends PartialType(
  CreateOrderCustomFieldValueRequestDto,
) {}

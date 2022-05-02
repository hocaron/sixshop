import {PartialType} from '@nestjs/swagger';
import {CreateCustomerCustomFieldValueRequestDto} from './create-customer-custom-field-value-request.dto';

export class UpdateCustomerCustomFieldValueRequestDto extends PartialType(
  CreateCustomerCustomFieldValueRequestDto,
) {}

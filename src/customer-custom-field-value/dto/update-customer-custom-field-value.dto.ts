import {PartialType} from '@nestjs/swagger';
import {CreateCustomerCustomFieldValueDto} from './create-customer-custom-field-value.dto';

export class UpdateCustomerCustomFieldValueDto extends PartialType(
  CreateCustomerCustomFieldValueDto,
) {}

import {PartialType} from '@nestjs/swagger';
import {CreateOrderCustomFieldValueDto} from './create-order-custom-field-value.dto';

export class UpdateOrderCustomFieldValueDto extends PartialType(CreateOrderCustomFieldValueDto) {}

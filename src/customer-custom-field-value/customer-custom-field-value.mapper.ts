import {Injectable} from '@nestjs/common';
import {CustomerCustomFieldValueResponseDto} from './dto/response/customer-custom-field-value-response.dto';
import {CustomerCustomFieldValue} from './schemas/customer-custom-field-value.schema';

@Injectable()
export class CustomerCustomFieldValueMapper {
  toResponse(entity: CustomerCustomFieldValue): CustomerCustomFieldValueResponseDto {
    return {
      id: entity._id,
      value: entity.value,
      customerId: entity.customerId,
      customFieldId: entity.customFieldId,
    };
  }
}

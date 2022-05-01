import {Injectable} from '@nestjs/common';
import {CustomField} from './schemas/custom-field.schema';
import {CustomFieldResponseDto} from './dto/response/custom-field-response.dto';

@Injectable()
export class CustomFieldMapper {
  toResponse(entity: CustomField): CustomFieldResponseDto {
    return {
      _id: entity.id,
      name: entity.name,
      arrayValue: entity.arrayValue,
      fieldType: entity.fieldType,
      description: entity.description,
    };
  }
}

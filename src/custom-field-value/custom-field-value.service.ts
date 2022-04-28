import { Injectable } from '@nestjs/common';
import { CreateCustomFieldValueDto } from './dto/create-custom-field-value.dto';
import { UpdateCustomFieldValueDto } from './dto/update-custom-field-value.dto';

@Injectable()
export class CustomFieldValueService {
  create(createCustomFieldValueDto: CreateCustomFieldValueDto) {
    return 'This action adds a new customFieldValue';
  }

  findAll() {
    return `This action returns all customFieldValue`;
  }

  findOne(id: number) {
    return `This action returns a #${id} customFieldValue`;
  }

  update(id: number, updateCustomFieldValueDto: UpdateCustomFieldValueDto) {
    return `This action updates a #${id} customFieldValue`;
  }

  remove(id: number) {
    return `This action removes a #${id} customFieldValue`;
  }
}

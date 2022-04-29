import {Injectable} from '@nestjs/common';
import {CreateCustomerCustomFieldValueDto} from './dto/create-customer-custom-field-value.dto';
import {UpdateCustomerCustomFieldValueDto} from './dto/update-customer-custom-field-value.dto';

@Injectable()
export class CustomerCustomFieldValueService {
  create(createCustomerCustomFieldValueDto: CreateCustomerCustomFieldValueDto) {
    return 'This action adds a new customerCustomFieldValue';
  }

  findAll() {
    return `This action returns all customerCustomFieldValue`;
  }

  findOne(id: number) {
    return `This action returns a #${id} customerCustomFieldValue`;
  }

  update(id: number, updateCustomerCustomFieldValueDto: UpdateCustomerCustomFieldValueDto) {
    return `This action updates a #${id} customerCustomFieldValue`;
  }

  remove(id: number) {
    return `This action removes a #${id} customerCustomFieldValue`;
  }
}

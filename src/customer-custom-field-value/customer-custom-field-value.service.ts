import {Injectable, HttpException} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {
  CreateCustomerCustomFieldValueDto,
  CreateCustomerCustomFieldValueResponseDto,
} from './dto/create-customer-custom-field-value.dto';
import {UpdateCustomerCustomFieldValueDto} from './dto/update-customer-custom-field-value.dto';
import {Err} from './../common/error';
import {GetCustomerCustomFieldValueResponseDto} from './dto/get-customer-custom-field-value.dto';
import {
  CustomerCustomFieldValue,
  CustomerCustomFieldValueDocument,
} from './schemas/customer-custom-field-value.schema';

@Injectable()
export class CustomerCustomFieldValueService {
  constructor(
    @InjectModel(CustomerCustomFieldValue.name)
    private readonly customerCustomFieldValueModel: Model<CustomerCustomFieldValueDocument>,
  ) {}

  createCustomerCustomFieldValue(
    createCustomerCustomFieldValueDto: CreateCustomerCustomFieldValueDto,
  ): Promise<CreateCustomerCustomFieldValueResponseDto> {
    return new this.customerCustomFieldValueModel(createCustomerCustomFieldValueDto).save();
  }

  async getCustomerCustomFieldValueByCustomerAndStore(
    customFieldId: string,
    customerId: string,
  ): Promise<GetCustomerCustomFieldValueResponseDto> {
    const existingCustomerCustomField = await this.customerCustomFieldValueModel
      .findOne({customFieldId, customerId})
      .exec();
    if (!existingCustomerCustomField) {
      throw new HttpException(
        Err.CUSTOMER_CUSTOM_FIELD.NOT_FOUND_CUSTOMER_CUSTOM_FIELD.message,
        Err.CUSTOMER_CUSTOM_FIELD.NOT_FOUND_CUSTOMER_CUSTOM_FIELD.statusCode,
      );
    }
    return existingCustomerCustomField;
  }

  async getAllCustomerCustomFieldValueInStore(
    customFieldId: string,
  ): Promise<GetCustomerCustomFieldValueResponseDto[]> {
    const existingCustomerCustomField = await this.customerCustomFieldValueModel
      .find({customFieldId})
      .exec();
    if (!existingCustomerCustomField) {
      throw new HttpException(
        Err.CUSTOMER_CUSTOM_FIELD.NOT_FOUND_CUSTOMER_CUSTOM_FIELD.message,
        Err.CUSTOMER_CUSTOM_FIELD.NOT_FOUND_CUSTOMER_CUSTOM_FIELD.statusCode,
      );
    }
    return existingCustomerCustomField;
  }

  async updateCustomerCustomFieldValue(
    id: string,
    updateCustomerCustomFieldValueDto: UpdateCustomerCustomFieldValueDto,
  ): Promise<string> {
    const existingCustomerCustomField = await this.customerCustomFieldValueModel
      .findById(id)
      .exec();
    if (!existingCustomerCustomField) {
      throw new HttpException(
        Err.CUSTOMER_CUSTOM_FIELD.NOT_FOUND_CUSTOMER_CUSTOM_FIELD.message,
        Err.CUSTOMER_CUSTOM_FIELD.NOT_FOUND_CUSTOMER_CUSTOM_FIELD.statusCode,
      );
    }
    existingCustomerCustomField.update(updateCustomerCustomFieldValueDto).exec();
    return '업데이트에 성공하였습니다.';
  }

  async deleteCustomerCustomFieldValue(id: string): Promise<string> {
    const existingCustomerCustomField = await this.customerCustomFieldValueModel
      .findById(id)
      .exec();
    if (!existingCustomerCustomField) {
      throw new HttpException(
        Err.CUSTOMER_CUSTOM_FIELD.NOT_FOUND_CUSTOMER_CUSTOM_FIELD.message,
        Err.CUSTOMER_CUSTOM_FIELD.NOT_FOUND_CUSTOMER_CUSTOM_FIELD.statusCode,
      );
    }
    existingCustomerCustomField.deleteOne({id});
    return '삭제에 성공하였습니다.';
  }
}

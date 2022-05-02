import {Injectable, HttpException} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {CreateCustomerCustomFieldValueRequestDto} from './dto/request/create-customer-custom-field-value-request.dto';
import {UpdateCustomerCustomFieldValueRequestDto} from './dto/request/update-customer-custom-field-value-request.dto';
import {Err} from './../common/error';
import {
  CustomerCustomFieldValue,
  CustomerCustomFieldValueDocument,
} from './schemas/customer-custom-field-value.schema';
import {CustomerCustomFieldValueResponseDto} from './dto/response/customer-custom-field-value-response.dto';
import {CustomerCustomFieldValueMapper} from './customer-custom-field-value.mapper';

@Injectable()
export class CustomerCustomFieldValueService {
  constructor(
    @InjectModel(CustomerCustomFieldValue.name)
    private readonly customerCustomFieldValueModel: Model<CustomerCustomFieldValueDocument>,
    private readonly mapper: CustomerCustomFieldValueMapper,
  ) {}

  async createCustomerCustomFieldValue(
    createCustomerCustomFieldValueRequestDto: CreateCustomerCustomFieldValueRequestDto,
  ): Promise<CustomerCustomFieldValueResponseDto> {
    return this.mapper.toResponse(
      await new this.customerCustomFieldValueModel(createCustomerCustomFieldValueRequestDto).save(),
    );
  }

  async getCustomerCustomFieldValueByCustomerAndStore(
    customFieldId: string,
    customerId: string,
  ): Promise<CustomerCustomFieldValueResponseDto> {
    const existingCustomerCustomField = await this.customerCustomFieldValueModel
      .findOne({customFieldId, customerId})
      .exec();
    if (!existingCustomerCustomField) {
      throw new HttpException(
        Err.CUSTOMER_CUSTOM_FIELD.NOT_FOUND_CUSTOMER_CUSTOM_FIELD.message,
        Err.CUSTOMER_CUSTOM_FIELD.NOT_FOUND_CUSTOMER_CUSTOM_FIELD.statusCode,
      );
    }
    return this.mapper.toResponse(existingCustomerCustomField);
  }

  async getAllCustomerCustomFieldValueInStore(
    customFieldId: string,
  ): Promise<CustomerCustomFieldValueResponseDto[]> {
    const existingCustomerCustomFields = await this.customerCustomFieldValueModel
      .find({customFieldId})
      .exec();
    if (!existingCustomerCustomFields) {
      throw new HttpException(
        Err.CUSTOMER_CUSTOM_FIELD.NOT_FOUND_CUSTOMER_CUSTOM_FIELD.message,
        Err.CUSTOMER_CUSTOM_FIELD.NOT_FOUND_CUSTOMER_CUSTOM_FIELD.statusCode,
      );
    }
    return existingCustomerCustomFields.map(customfield => this.mapper.toResponse(customfield));
  }

  async updateCustomerCustomFieldValue(
    id: string,
    updateCustomerCustomFieldValueDto: UpdateCustomerCustomFieldValueRequestDto,
  ): Promise<CustomerCustomFieldValueResponseDto> {
    const existingCustomerCustomField = await this.checkAndFindById(id);
    await existingCustomerCustomField.update(updateCustomerCustomFieldValueDto).exec();
    return this.mapper.toResponse(await this.findById(existingCustomerCustomField.id));
  }

  async deleteCustomerCustomFieldValue(id: string): Promise<string> {
    const existingCustomerCustomField = await this.checkAndFindById(id);
    existingCustomerCustomField.deleteOne({id});
    return `${id} 삭제에 성공하였습니다.`;
  }

  private async findById(id: string) {
    return await this.customerCustomFieldValueModel
      .findOne({
        id,
      })
      .exec();
  }

  private async checkAndFindById(id: string) {
    const customerCustomField = await this.customerCustomFieldValueModel.findById(id).exec();
    if (!customerCustomField) {
      throw new HttpException(
        Err.CUSTOMER_CUSTOM_FIELD.NOT_FOUND_CUSTOMER_CUSTOM_FIELD.message,
        Err.CUSTOMER_CUSTOM_FIELD.NOT_FOUND_CUSTOMER_CUSTOM_FIELD.statusCode,
      );
    }
    return customerCustomField;
  }
}

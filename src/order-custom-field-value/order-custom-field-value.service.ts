import {Injectable, HttpException} from '@nestjs/common';
import {
  CreateOrderCustomFieldValueDto,
  CreateOrderCustomFieldValueResponseDto,
} from './dto/create-order-custom-field-value.dto';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {Err} from './../common/error';
import {GetOrderCustomFieldValueResponseDto} from './dto/get-order-custom-field-value.dto';
import {UpdateOrderCustomFieldValueDto} from './dto/update-order-custom-field-value.dto';
import {
  OrderCustomFieldValue,
  OrderCustomFieldValueDocument,
} from './schemas/order-custom-field-value.schema';

@Injectable()
export class OrderCustomFieldValueService {
  constructor(
    @InjectModel(OrderCustomFieldValue.name)
    private readonly orderCustomFieldValueModel: Model<OrderCustomFieldValueDocument>,
  ) {}

  createOrderCustomFieldValue(
    createOrderCustomFieldValueDto: CreateOrderCustomFieldValueDto,
  ): Promise<CreateOrderCustomFieldValueResponseDto> {
    return new this.orderCustomFieldValueModel(createOrderCustomFieldValueDto).save();
  }

  async getOrderCustomFieldValueByOrderAndStore(
    customFieldId: string,
    orderId: string,
  ): Promise<GetOrderCustomFieldValueResponseDto> {
    const existingOrderCustomField = await this.orderCustomFieldValueModel
      .findOne({customFieldId, orderId})
      .exec();
    if (!existingOrderCustomField) {
      throw new HttpException(
        Err.ORDER_CUSTOM_FIELD.NOT_FOUND_ORDER_CUSTOM_FIELD.message,
        Err.ORDER_CUSTOM_FIELD.NOT_FOUND_ORDER_CUSTOM_FIELD.statusCode,
      );
    }
    return existingOrderCustomField;
  }

  async getAllOrderCustomFieldValueInStore(
    customFieldId: string,
  ): Promise<GetOrderCustomFieldValueResponseDto[]> {
    const existingOrderCustomFields = await this.orderCustomFieldValueModel
      .find({customFieldId})
      .exec();
    if (!existingOrderCustomFields) {
      throw new HttpException(
        Err.ORDER_CUSTOM_FIELD.NOT_FOUND_ORDER_CUSTOM_FIELD.message,
        Err.ORDER_CUSTOM_FIELD.NOT_FOUND_ORDER_CUSTOM_FIELD.statusCode,
      );
    }
    return existingOrderCustomFields;
  }

  async updateOrderCustomFieldValue(
    id: string,
    updateOrderCustomFieldValueDto: UpdateOrderCustomFieldValueDto,
  ): Promise<string> {
    const existingOrderCustomField = await this.orderCustomFieldValueModel.findById(id).exec();
    if (!existingOrderCustomField) {
      throw new HttpException(
        Err.ORDER_CUSTOM_FIELD.NOT_FOUND_ORDER_CUSTOM_FIELD.message,
        Err.ORDER_CUSTOM_FIELD.NOT_FOUND_ORDER_CUSTOM_FIELD.statusCode,
      );
    }
    existingOrderCustomField.update(updateOrderCustomFieldValueDto).exec();
    return '업데이트에 성공하였습니다.';
  }

  async deleteOrderCustomFieldValue(id: string): Promise<string> {
    const existingOrderCustomField = await this.orderCustomFieldValueModel.findById(id).exec();
    if (!existingOrderCustomField) {
      throw new HttpException(
        Err.ORDER_CUSTOM_FIELD.NOT_FOUND_ORDER_CUSTOM_FIELD.message,
        Err.ORDER_CUSTOM_FIELD.NOT_FOUND_ORDER_CUSTOM_FIELD.statusCode,
      );
    }
    existingOrderCustomField.deleteOne({id});
    return '삭제에 성공하였습니다.';
  }
}

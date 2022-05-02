import {Injectable, HttpException} from '@nestjs/common';
import {CreateOrderCustomFieldValueRequestDto} from './dto/request/create-order-custom-field-value-request.dto';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {Err} from './../common/error';
import {UpdateOrderCustomFieldValueRequestDto} from './dto/request/update-order-custom-field-value-request.dto';
import {
  OrderCustomFieldValue,
  OrderCustomFieldValueDocument,
} from './schemas/order-custom-field-value.schema';
import {OrderCustomFieldValueResponseDto} from './dto/response/order-custom-field-value-response.dto';
import {OrderCustomFieldValueMapper} from './order-custom-field-value.mapper';

@Injectable()
export class OrderCustomFieldValueService {
  constructor(
    @InjectModel(OrderCustomFieldValue.name)
    private readonly orderCustomFieldValueModel: Model<OrderCustomFieldValueDocument>,
    private readonly mapper: OrderCustomFieldValueMapper,
  ) {}

  async createOrderCustomFieldValue(
    createOrderCustomFieldValueRequestDto: CreateOrderCustomFieldValueRequestDto,
  ): Promise<OrderCustomFieldValueResponseDto> {
    return this.mapper.toResponse(
      await new this.orderCustomFieldValueModel(createOrderCustomFieldValueRequestDto).save(),
    );
  }

  async getOrderCustomFieldValueByOrderAndStore(
    customFieldId: string,
    orderId: string,
  ): Promise<OrderCustomFieldValueResponseDto> {
    const existingOrderCustomField = await this.orderCustomFieldValueModel
      .findOne({customFieldId, orderId})
      .exec();
    if (!existingOrderCustomField) {
      throw new HttpException(
        Err.ORDER_CUSTOM_FIELD.NOT_FOUND_ORDER_CUSTOM_FIELD.message,
        Err.ORDER_CUSTOM_FIELD.NOT_FOUND_ORDER_CUSTOM_FIELD.statusCode,
      );
    }
    return this.mapper.toResponse(existingOrderCustomField);
  }

  async getAllOrderCustomFieldValueInStore(
    customFieldId: string,
  ): Promise<OrderCustomFieldValueResponseDto[]> {
    const existingOrderCustomFields = await this.orderCustomFieldValueModel
      .find({customFieldId})
      .exec();
    if (!existingOrderCustomFields) {
      throw new HttpException(
        Err.ORDER_CUSTOM_FIELD.NOT_FOUND_ORDER_CUSTOM_FIELD.message,
        Err.ORDER_CUSTOM_FIELD.NOT_FOUND_ORDER_CUSTOM_FIELD.statusCode,
      );
    }
    return existingOrderCustomFields.map(customfield => this.mapper.toResponse(customfield));
  }

  async updateOrderCustomFieldValue(
    id: string,
    updateOrderCustomFieldValueDto: UpdateOrderCustomFieldValueRequestDto,
  ): Promise<OrderCustomFieldValueResponseDto> {
    const existingOrderCustomField = await this.checkAndFindById(id);
    await existingOrderCustomField.update(updateOrderCustomFieldValueDto).exec();
    return this.mapper.toResponse(await this.findById(existingOrderCustomField.id));
  }

  async deleteOrderCustomFieldValue(id: string): Promise<string> {
    const existingOrderCustomField = await this.checkAndFindById(id);
    existingOrderCustomField.deleteOne({id});
    return `${id} 삭제에 성공하였습니다.`;
  }

  private async findById(id: string) {
    return await this.orderCustomFieldValueModel
      .findOne({
        id,
      })
      .exec();
  }

  private async checkAndFindById(id: string) {
    const orderCustomFieldValue = await this.orderCustomFieldValueModel.findById(id).exec();
    if (!orderCustomFieldValue) {
      throw new HttpException(
        Err.ORDER_CUSTOM_FIELD.NOT_FOUND_ORDER_CUSTOM_FIELD.message,
        Err.ORDER_CUSTOM_FIELD.NOT_FOUND_ORDER_CUSTOM_FIELD.statusCode,
      );
    }
    return orderCustomFieldValue;
  }
}

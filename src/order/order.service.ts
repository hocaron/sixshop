import {Injectable, HttpException} from '@nestjs/common';
import {CreateOrderDto, CreateOrderResponseDto} from './dto/create-order.dto';
import {UpdateOrderDto} from './dto/update-order.dto';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {Err} from './../common/error';
import {Order, OrderDocument} from './schemas/order.schema';
import {GetOrderResponseDto} from './dto/get-order.dto';

@Injectable()
export class OrderService {
  constructor(@InjectModel(Order.name) private readonly orderModel: Model<OrderDocument>) {}

  createOrder(createOrderDto: CreateOrderDto): Promise<CreateOrderResponseDto> {
    return new this.orderModel(createOrderDto).save();
  }

  async getOrder(id: string): Promise<GetOrderResponseDto> {
    const existingOrder = await this.orderModel.findById(id).exec();
    if (!existingOrder) {
      throw new HttpException(
        Err.ORDER.NOT_FOUND_ORDER.message,
        Err.ORDER.NOT_FOUND_ORDER.statusCode,
      );
    }
    return existingOrder;
  }

  async updateOrder(id: string, updateOrderDto: UpdateOrderDto): Promise<string> {
    const existingOrder = await this.orderModel.findById(id).exec();
    if (!existingOrder) {
      throw new HttpException(
        Err.ORDER.NOT_FOUND_ORDER.message,
        Err.ORDER.NOT_FOUND_ORDER.statusCode,
      );
    }
    existingOrder.update(updateOrderDto).exec();
    return '업데이트에 성공하였습니다.';
  }

  async deleteOrder(id: string): Promise<string> {
    const existingOrder = await this.orderModel.findById(id).exec();
    if (!existingOrder) {
      throw new HttpException(
        Err.ORDER.NOT_FOUND_ORDER.message,
        Err.ORDER.NOT_FOUND_ORDER.statusCode,
      );
    }
    existingOrder.deleteOne({id});
    return '삭제에 성공하였습니다.';
  }
}

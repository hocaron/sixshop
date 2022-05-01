import {Injectable, HttpException} from '@nestjs/common';
import {UpdateOrderDto} from './dto/request/update-order.dto';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {Err} from './../common/error';
import {Order, OrderDocument} from './schemas/order.schema';
import {OrderResponseDto} from './dto/response/order-response.dto';
import {OrderMapper} from './order.mapper';
import {CreateOrderDto} from './dto/request/create-order.dto';

@Injectable()
export class OrderService {
  constructor(
    @InjectModel(Order.name) private readonly orderModel: Model<OrderDocument>,
    private readonly mapper: OrderMapper,
  ) {}

  async createOrder(createOrderDto: CreateOrderDto): Promise<OrderResponseDto> {
    return this.mapper.toResponse(await new this.orderModel(createOrderDto).save());
  }

  async getOrder(id: string): Promise<OrderResponseDto> {
    const existingOrder = await this.checkAndFindById(id);
    return this.mapper.toResponse(existingOrder);
  }

  async updateOrder(id: string, updateOrderDto: UpdateOrderDto): Promise<OrderResponseDto> {
    const existingOrder = await this.checkAndFindById(id);
    await existingOrder.update(updateOrderDto).exec();
    return this.mapper.toResponse(await this.findById(existingOrder.id));
  }

  async deleteOrder(id: string): Promise<string> {
    const existingOrder = await this.checkAndFindById(id);
    existingOrder.deleteOne({id});
    return `${id} 삭제에 성공하였습니다.`;
  }

  private async findById(id: string) {
    return await this.orderModel
      .findOne({
        id,
      })
      .exec();
  }

  private async checkAndFindById(id: string) {
    const order = await this.orderModel.findById(id).exec();
    if (!order) {
      throw new HttpException(
        Err.ORDER.NOT_FOUND_ORDER.message,
        Err.ORDER.NOT_FOUND_ORDER.statusCode,
      );
    }
    return order;
  }
}

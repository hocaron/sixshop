import {Controller, Get, Post, Body, Patch, Param, Delete} from '@nestjs/common';
import {OrderService} from './order.service';
import {UpdateOrderRequestDto} from './dto/request/update-order-request.dto';
import {ApiTags} from '@nestjs/swagger';
import {docs} from './order.docs';
import {CreateOrderRequestDto} from './dto/request/create-order-request.dto';

@ApiTags('order')
@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  @docs.createOrder('주문 생성')
  createOrder(@Body() createOrderDto: CreateOrderRequestDto) {
    return this.orderService.createOrder(createOrderDto);
  }

  @Get(':id')
  @docs.getOrder('ID로 주문 조회')
  getOrder(@Param('id') id: string) {
    return this.orderService.getOrder(id);
  }

  @Patch(':id')
  @docs.updateOrder('ID로 주문 정보 업데이트')
  updateOrder(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderRequestDto) {
    return this.orderService.updateOrder(id, updateOrderDto);
  }

  @Delete(':id')
  @docs.deleteOrder('ID로 주문 식제')
  deleteOrder(@Param('id') id: string) {
    return this.orderService.deleteOrder(id);
  }
}

import {Controller, Get, Post, Body, Patch, Param, Delete} from '@nestjs/common';
import {OrderCustomFieldValueService} from './order-custom-field-value.service';
import {CreateOrderCustomFieldValueDto} from './dto/create-order-custom-field-value.dto';
import {UpdateOrderCustomFieldValueDto} from './dto/update-order-custom-field-value.dto';
import {ApiTags} from '@nestjs/swagger';
import {docs} from './order-custom-field.docs';

@ApiTags('order-custom-field-value')
@Controller('order-custom-field-value')
export class OrderCustomFieldValueController {
  constructor(private readonly orderCustomFieldValueService: OrderCustomFieldValueService) {}

  @Post()
  @docs.createOrderCustomFieldValue('주문 관련 사용자 정의 필드값 생성')
  createOrderCustomFieldValue(
    @Body() createOrderCustomFieldValueDto: CreateOrderCustomFieldValueDto,
  ) {
    return this.orderCustomFieldValueService.createOrderCustomFieldValue(
      createOrderCustomFieldValueDto,
    );
  }

  @Get(':customFieldId/:orderId')
  @docs.getOrderCustomFieldValueByOrderAndStore('주문 관련 사용자 정의 필드값 조회')
  getOrderCustomFieldValueByOrderAndStore(
    @Param('customFieldId') customFieldId: string,
    @Param('orderId') orderId: string,
  ) {
    return this.orderCustomFieldValueService.getOrderCustomFieldValueByOrderAndStore(
      customFieldId,
      orderId,
    );
  }

  @Get(':customFieldId')
  @docs.getAllOrderCustomFieldValueInStore('주문 관련 사용자 정의 필드값 조회')
  getAllOrderCustomFieldValueInStore(@Param('customFieldId') customFieldId: string) {
    return this.orderCustomFieldValueService.getAllOrderCustomFieldValueInStore(customFieldId);
  }

  @Patch(':id')
  @docs.updateOrderCustomFieldValue('주문 관련 사용자 정의 필드값 업데이트')
  updateOrderCustomFieldValue(
    @Param('id') id: string,
    @Body() updateOrderCustomFieldValueDto: UpdateOrderCustomFieldValueDto,
  ) {
    return this.orderCustomFieldValueService.updateOrderCustomFieldValue(
      id,
      updateOrderCustomFieldValueDto,
    );
  }

  @Delete(':id')
  @docs.deleteOrderCustomFieldValue('주문 관련 사용자 정의 필드값 삭제')
  deleteOrderCustomFieldValue(@Param('id') id: string) {
    return this.orderCustomFieldValueService.deleteOrderCustomFieldValue(id);
  }
}
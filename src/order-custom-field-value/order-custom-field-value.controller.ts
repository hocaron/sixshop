import {Controller, Get, Post, Body, Patch, Param, Delete} from '@nestjs/common';
import {OrderCustomFieldValueService} from './order-custom-field-value.service';
import {CreateOrderCustomFieldValueRequestDto} from './dto/request/create-order-custom-field-value-request.dto';
import {UpdateOrderCustomFieldValueRequestDto} from './dto/request/update-order-custom-field-value-request.dto';
import {ApiTags} from '@nestjs/swagger';
import {docs} from './order-custom-field.docs';

@ApiTags('order-custom-field-values')
@Controller('order-custom-field-values')
export class OrderCustomFieldValueController {
  constructor(private readonly orderCustomFieldValueService: OrderCustomFieldValueService) {}

  @Post()
  @docs.createOrderCustomFieldValue('주문 관련 사용자 정의 필드값 생성')
  createOrderCustomFieldValue(
    @Body() createOrderCustomFieldValueRequestDto: CreateOrderCustomFieldValueRequestDto,
  ) {
    return this.orderCustomFieldValueService.createOrderCustomFieldValue(
      createOrderCustomFieldValueRequestDto,
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
  @docs.getAllOrderCustomFieldValueInStore('상점내 모든 주문 관련 사용자 정의 필드값 조회')
  getAllOrderCustomFieldValueInStore(@Param('customFieldId') customFieldId: string) {
    return this.orderCustomFieldValueService.getAllOrderCustomFieldValueInStore(customFieldId);
  }

  @Patch(':id')
  @docs.updateOrderCustomFieldValue('Id로 주문 관련 사용자 정의 필드값 업데이트')
  updateOrderCustomFieldValue(
    @Param('id') id: string,
    @Body() updateOrderCustomFieldValueRequestDto: UpdateOrderCustomFieldValueRequestDto,
  ) {
    return this.orderCustomFieldValueService.updateOrderCustomFieldValue(
      id,
      updateOrderCustomFieldValueRequestDto,
    );
  }

  @Delete(':id')
  @docs.deleteOrderCustomFieldValue('Id로 주문 관련 사용자 정의 필드값 삭제')
  deleteOrderCustomFieldValue(@Param('id') id: string) {
    return this.orderCustomFieldValueService.deleteOrderCustomFieldValue(id);
  }
}

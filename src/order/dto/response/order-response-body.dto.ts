import {BaseResponseBodyDto} from './../../../common/dto/base-response-body.dto';
import {ApiProperty} from '@nestjs/swagger';
import {OrderResponseDto} from './order-response.dto';

export class OrderResponseBodyDto extends BaseResponseBodyDto {
  @ApiProperty()
  data: OrderResponseDto;
}

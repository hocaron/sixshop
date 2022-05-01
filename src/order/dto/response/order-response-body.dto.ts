import {BaseGetResponseBodyDto} from '../../../common/dto/base-get-response-body.dto';
import {ApiProperty} from '@nestjs/swagger';
import {OrderResponseDto} from './order-response.dto';

export class OrderResponseBodyDto extends BaseGetResponseBodyDto {
  @ApiProperty()
  data: OrderResponseDto;
}

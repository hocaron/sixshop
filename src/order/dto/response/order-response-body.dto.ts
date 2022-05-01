import {BaseGetReponseBodyDto} from '../../../common/dto/base-get-response-body.dto';
import {ApiProperty} from '@nestjs/swagger';
import {OrderResponseDto} from './order-response.dto';

export class OrderResponseBodyDto extends BaseGetReponseBodyDto {
  @ApiProperty()
  data: OrderResponseDto;
}

import {BaseResponseBodyDto} from './../../../common/dto/base-response-body.dto';
import {ApiProperty} from '@nestjs/swagger';
import {OrderCustomFieldValueResponseDto} from './order-custom-field-value-response.dto';

export class OrderCustomFieldValuesResponseDto extends BaseResponseBodyDto {
  @ApiProperty({type: [OrderCustomFieldValueResponseDto]})
  data: OrderCustomFieldValueResponseDto[];
}

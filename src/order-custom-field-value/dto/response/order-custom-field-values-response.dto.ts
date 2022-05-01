import {BaseGetReponseBodyDto} from '../../../common/dto/base-get-response-body.dto';
import {ApiProperty} from '@nestjs/swagger';
import {OrderCustomFieldValueResponseDto} from './order-custom-field-value-response.dto';

export class OrderCustomFieldValuesResponseDto extends BaseGetReponseBodyDto {
  @ApiProperty({type: [OrderCustomFieldValueResponseDto]})
  data: OrderCustomFieldValueResponseDto[];
}

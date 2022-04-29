import {ApiProperty} from '@nestjs/swagger';
import {BaseGetReponseBodyDto} from '../../common/dto/base-get-response-body.dto';
import {GetOrderCustomFieldValueResponseBodyDto} from './get-customer-custom-field-value.dto';

export class GetAllOrderCustomFieldValueResponseBodyDto extends BaseGetReponseBodyDto {
  @ApiProperty({type: [GetOrderCustomFieldValueResponseBodyDto]})
  data: GetOrderCustomFieldValueResponseBodyDto[];
}

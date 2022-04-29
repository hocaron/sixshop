import {ApiProperty} from '@nestjs/swagger';
import {BaseGetReponseBodyDto} from '../../common/dto/base-get-response-body.dto';
import {GetCustomerCustomFieldValueResponseDto} from './get-customer-custom-field-value.dto';

export class GetAllCustomerCustomFieldValueResponseBodyDto extends BaseGetReponseBodyDto {
  @ApiProperty({type: [GetCustomerCustomFieldValueResponseDto]})
  data: GetCustomerCustomFieldValueResponseDto[];
}

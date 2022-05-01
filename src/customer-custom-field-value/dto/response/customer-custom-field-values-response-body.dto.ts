import {ApiProperty} from '@nestjs/swagger';
import {CustomerCustomFieldValueResponseDto} from './customer-custom-field-value-response.dto';
import {BaseGetReponseBodyDto} from '../../../common/dto/base-get-response-body.dto';

export class CustomerCustomFieldValuesResponseBodyDto extends BaseGetReponseBodyDto {
  @ApiProperty({type: [CustomerCustomFieldValueResponseDto]})
  data: CustomerCustomFieldValueResponseDto[];
}

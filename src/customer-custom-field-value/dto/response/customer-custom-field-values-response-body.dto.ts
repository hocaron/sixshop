import {ApiProperty} from '@nestjs/swagger';
import {CustomerCustomFieldValueResponseDto} from './customer-custom-field-value-response.dto';
import {BaseGetResponseBodyDto} from '../../../common/dto/base-get-response-body.dto';

export class CustomerCustomFieldValuesResponseBodyDto extends BaseGetResponseBodyDto {
  @ApiProperty({type: [CustomerCustomFieldValueResponseDto]})
  data: CustomerCustomFieldValueResponseDto[];
}

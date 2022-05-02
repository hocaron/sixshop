import {ApiProperty} from '@nestjs/swagger';
import {CustomerCustomFieldValueResponseDto} from './customer-custom-field-value-response.dto';
import {BaseResponseBodyDto} from './../../../common/dto/base-response-body.dto';

export class CustomerCustomFieldValuesResponseBodyDto extends BaseResponseBodyDto {
  @ApiProperty({type: [CustomerCustomFieldValueResponseDto]})
  data: CustomerCustomFieldValueResponseDto[];
}

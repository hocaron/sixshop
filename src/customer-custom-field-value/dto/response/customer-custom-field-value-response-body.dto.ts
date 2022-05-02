import {BaseResponseBodyDto} from './../../../common/dto/base-response-body.dto';
import {ApiProperty} from '@nestjs/swagger';
import {CustomerCustomFieldValueResponseDto} from './customer-custom-field-value-response.dto';

export class CustomerCustomFieldValueResponseBodyDto extends BaseResponseBodyDto {
  @ApiProperty()
  data: CustomerCustomFieldValueResponseDto;
}

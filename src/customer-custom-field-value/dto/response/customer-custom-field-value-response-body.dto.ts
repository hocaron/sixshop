import {BasePostResponseBodyDto} from '../../../common/dto/base-post-response-body.dto';
import {ApiProperty} from '@nestjs/swagger';
import {CustomerCustomFieldValueResponseDto} from './customer-custom-field-value-response.dto';

export class CustomerCustomFieldValueResponseBodyDto extends BasePostResponseBodyDto {
  @ApiProperty()
  data: CustomerCustomFieldValueResponseDto;
}

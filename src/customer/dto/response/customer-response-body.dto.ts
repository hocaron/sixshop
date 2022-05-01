import {BasePostResponseBodyDto} from '../../../common/dto/base-post-response-body.dto';
import {ApiProperty} from '@nestjs/swagger';
import {CustomerResponseDto} from './customer-response.dto';

export class CustomerResponseBodyDto extends BasePostResponseBodyDto {
  @ApiProperty()
  data: CustomerResponseDto;
}

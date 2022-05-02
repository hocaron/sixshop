import {ApiProperty} from '@nestjs/swagger';
import {CustomerResponseDto} from './customer-response.dto';
import {BaseResponseBodyDto} from './../../../common/dto/base-response-body.dto';

export class CustomerResponseBodyDto extends BaseResponseBodyDto {
  @ApiProperty()
  data: CustomerResponseDto;
}

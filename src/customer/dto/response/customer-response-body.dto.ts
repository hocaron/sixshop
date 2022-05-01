import {BasePostReponseBodyDto} from '../../../common/dto/base-post-response-body.dto';
import {ApiProperty} from '@nestjs/swagger';
import {CustomerResponseDto} from './customer-response.dto';

export class CustomerResponseBodyDto extends BasePostReponseBodyDto {
  @ApiProperty()
  data: CustomerResponseDto;
}

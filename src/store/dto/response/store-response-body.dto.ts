import {ApiProperty} from '@nestjs/swagger';
import {BaseResponseBodyDto} from './../../../common/dto/base-response-body.dto';
import {StoreResponseDto} from './store-response.dto';

export class StoreResponseBodyDto extends BaseResponseBodyDto {
  @ApiProperty()
  data: StoreResponseDto;
}

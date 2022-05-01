import {ApiProperty} from '@nestjs/swagger';
import {BaseGetResponseBodyDto} from '../../../common/dto/base-get-response-body.dto';
import {StoreResponseDto} from './store-response.dto';

export class StoreResponseBodyDto extends BaseGetResponseBodyDto {
  @ApiProperty()
  data: StoreResponseDto;
}

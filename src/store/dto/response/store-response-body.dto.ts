import {ApiProperty} from '@nestjs/swagger';
import {BaseGetReponseBodyDto} from '../../../common/dto/base-get-response-body.dto';
import {StoreResponseDto} from './store-response.dto';

export class StoreResponseBodyDto extends BaseGetReponseBodyDto {
  @ApiProperty()
  data: StoreResponseDto;
}

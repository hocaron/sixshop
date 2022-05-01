import {ApiProperty} from '@nestjs/swagger';
import {StoreResponseDto} from './store-response.dto';
import {BaseGetResponseBodyDto} from '../../../common/dto/base-get-response-body.dto';

export class StoresResponseBodyDto extends BaseGetResponseBodyDto {
  @ApiProperty({type: [StoreResponseDto]})
  data: StoreResponseDto[];
}

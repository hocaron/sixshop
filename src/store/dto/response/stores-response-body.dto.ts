import {ApiProperty} from '@nestjs/swagger';
import {StoreResponseDto} from './store-response.dto';
import {BaseResponseBodyDto} from './../../../common/dto/base-response-body.dto';

export class StoresResponseBodyDto extends BaseResponseBodyDto {
  @ApiProperty({type: [StoreResponseDto]})
  data: StoreResponseDto[];
}

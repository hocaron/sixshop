import {ApiProperty} from '@nestjs/swagger';
import {StoreResponseDto} from './store-response.dto';
import {BaseGetReponseBodyDto} from '../../../common/dto/base-get-response-body.dto';

export class StoresResponseBodyDto extends BaseGetReponseBodyDto {
  @ApiProperty({type: [StoreResponseDto]})
  data: StoreResponseDto[];
}

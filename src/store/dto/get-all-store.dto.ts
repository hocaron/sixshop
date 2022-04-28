import {ApiProperty} from '@nestjs/swagger';
import {BaseGetReponseBodyDto} from '../../common/dtos/base-get-response-body.dto';
import {GetStoreResponseDto} from './get-store.dto';

export class GetAllStoreResponseBodyDto extends BaseGetReponseBodyDto {
  @ApiProperty({type: [GetStoreResponseDto]})
  data: GetStoreResponseDto[];
}
import {ApiProperty} from '@nestjs/swagger';
import {BaseGetReponseBodyDto} from './base-get-response-body.dto';

export class BaseUpdateResponseBodyDto extends BaseGetReponseBodyDto {
  @ApiProperty({example: '업데이트에 성공하였습니다.'})
  data;
}

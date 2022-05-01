import {ApiProperty} from '@nestjs/swagger';
import {BaseGetReponseBodyDto} from './base-get-response-body.dto';

export class BaseDeleteResponseBodyDto extends BaseGetReponseBodyDto {
  @ApiProperty({example: 'id 삭제에 성공하였습니다.'})
  data;
}

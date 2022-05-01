import {ApiProperty} from '@nestjs/swagger';
import {BaseGetResponseBodyDto} from './base-get-response-body.dto';

export class BaseDeleteResponseBodyDto extends BaseGetResponseBodyDto {
  @ApiProperty({example: 'id 삭제에 성공하였습니다.'})
  data;
}

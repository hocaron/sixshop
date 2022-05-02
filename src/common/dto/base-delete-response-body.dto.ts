import {ApiProperty} from '@nestjs/swagger';
import {BaseResponseBodyDto} from './base-response-body.dto';

export class BaseDeleteResponseBodyDto extends BaseResponseBodyDto {
  @ApiProperty({example: 'id 삭제에 성공하였습니다.'})
  data;
}

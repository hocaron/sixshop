import {ApiProperty} from '@nestjs/swagger';
import {BaseGetReponseBodyDto} from '../../common/dtos/base-get-response-body.dto';

export class GetStoreResponseDto {
  @ApiProperty({example: 'a1s2d3f4g5'})
  _id: string;

  @ApiProperty({example: 'sixshop'})
  name: string;
}

export class GetStoreResponseBodyDto extends BaseGetReponseBodyDto {
  @ApiProperty()
  data: GetStoreResponseDto;
}

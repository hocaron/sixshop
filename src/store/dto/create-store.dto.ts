import {ApiProperty} from '@nestjs/swagger';
import {BasePostReponseBodyDto} from '../../common/dtos/base-post-response-body.dto';

export class CreateStoreDto {
  @ApiProperty({example: 'sixshop'})
  name: string;
}

export class CreateStoreResponseDto {
  @ApiProperty({example: 'sixshop'})
  name: string;

  @ApiProperty({example: 'a1s2d3f4g5'})
  _id: string;
}

export class CreateStoreResponseBodyDto extends BasePostReponseBodyDto {
  @ApiProperty()
  data: CreateStoreResponseDto;
}

import {ApiProperty} from '@nestjs/swagger';
import {BasePostReponseBodyDto} from '../../common/dtos/base-post-response-body.dto';

export class CreateStoreDto {
  @ApiProperty({example: 'sixshop', description: '상점 이름'})
  name: string;
}

export class CreateStoreResponseDto {
  @ApiProperty({example: 'sixshop', description: '상점 이름'})
  name: string;

  @ApiProperty({example: 'a1s2d3f4g5', description: '상점 ID'})
  _id: string;
}

export class CreateStoreResponseBodyDto extends BasePostReponseBodyDto {
  @ApiProperty()
  data: CreateStoreResponseDto;
}

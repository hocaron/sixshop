import {ApiProperty} from '@nestjs/swagger';
import {BaseGetReponseBodyDto} from '../../common/dto/base-get-response-body.dto';

export class GetCategoryResponseDto {
  @ApiProperty({example: 'a1s2d3f4g5', description: '카테고리 ID'})
  _id: string;

  @ApiProperty({example: '의류', description: '카테고리 이름'})
  name: string;

  @ApiProperty({example: '의류에 관한 카테고리입니다.', description: '카테고리 설명'})
  description: string;
}

export class GetCategoryResponseBodyDto extends BaseGetReponseBodyDto {
  @ApiProperty()
  data: GetCategoryResponseDto;
}

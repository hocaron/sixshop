import {ApiProperty} from '@nestjs/swagger';
import {BasePostReponseBodyDto} from '../../../common/dto/base-post-response-body.dto';

export class CreateCategoryRequestDto {
  @ApiProperty({example: '의류', description: '카테고리 이름'})
  name: string;

  @ApiProperty({example: '의류에 관한 카테고리입니다.', description: '카테고리 설명'})
  description: string;
}

import {BasePostReponseBodyDto} from '../../../common/dto/base-post-response-body.dto';
import {ApiProperty} from '@nestjs/swagger';
import {CategoryResponseDto} from './category-response.dto';

export class CategoryResponseBodyDto extends BasePostReponseBodyDto {
  @ApiProperty()
  data: CategoryResponseDto;
}

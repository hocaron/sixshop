import {BasePostResponseBodyDto} from '../../../common/dto/base-post-response-body.dto';
import {ApiProperty} from '@nestjs/swagger';
import {CategoryResponseDto} from './category-response.dto';

export class CategoryResponseBodyDto extends BasePostResponseBodyDto {
  @ApiProperty()
  data: CategoryResponseDto;
}

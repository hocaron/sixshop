import {BaseResponseBodyDto} from './../../../common/dto/base-response-body.dto';
import {ApiProperty} from '@nestjs/swagger';
import {CategoryResponseDto} from './category-response.dto';

export class CategoryResponseBodyDto extends BaseResponseBodyDto {
  @ApiProperty()
  data: CategoryResponseDto;
}

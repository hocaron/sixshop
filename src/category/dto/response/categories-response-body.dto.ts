import {ApiProperty} from '@nestjs/swagger';
import {CategoryResponseDto} from './category-response.dto';
import {BaseResponseBodyDto} from './../../../common/dto/base-response-body.dto';

export class CategoriesResponseBodyDto extends BaseResponseBodyDto {
  @ApiProperty({type: [CategoryResponseDto]})
  data: CategoryResponseDto[];
}

import {ApiProperty} from '@nestjs/swagger';
import {CategoryResponseDto} from './category-response.dto';
import {BaseGetResponseBodyDto} from '../../../common/dto/base-get-response-body.dto';

export class CategoriesResponseBodyDto extends BaseGetResponseBodyDto {
  @ApiProperty({type: [CategoryResponseDto]})
  data: CategoryResponseDto[];
}

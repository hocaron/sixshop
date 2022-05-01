import {ApiProperty} from '@nestjs/swagger';
import {CategoryResponseDto} from './category-response.dto';
import {BaseGetReponseBodyDto} from '../../../common/dto/base-get-response-body.dto';

export class CategoriesResponseBodyDto extends BaseGetReponseBodyDto {
  @ApiProperty({type: [CategoryResponseDto]})
  data: CategoryResponseDto[];
}

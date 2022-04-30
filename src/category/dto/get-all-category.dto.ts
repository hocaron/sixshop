import {ApiProperty} from '@nestjs/swagger';
import {BaseGetReponseBodyDto} from '../../common/dto/base-get-response-body.dto';
import {GetCategoryResponseDto} from './get-category.dto';

export class GetAllCategoryResponseBodyDto extends BaseGetReponseBodyDto {
  @ApiProperty({type: [GetCategoryResponseDto]})
  data: GetCategoryResponseDto[];
}

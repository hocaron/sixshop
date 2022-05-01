import {BaseGetReponseBodyDto} from '../../../common/dto/base-get-response-body.dto';
import {ApiProperty} from '@nestjs/swagger';
import {ProductResponseDto} from './product-response.dto';

export class ProductReponseBodyDto extends BaseGetReponseBodyDto {
  @ApiProperty()
  data: ProductResponseDto;
}

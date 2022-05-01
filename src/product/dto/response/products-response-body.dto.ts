import {ApiProperty} from '@nestjs/swagger';
import {BaseGetReponseBodyDto} from '../../../common/dto/base-get-response-body.dto';
import {ProductResponseDto} from './product-response.dto';

export class ProductsResponseBodyDto extends BaseGetReponseBodyDto {
  @ApiProperty({type: [ProductResponseDto]})
  data: ProductResponseDto[];
}

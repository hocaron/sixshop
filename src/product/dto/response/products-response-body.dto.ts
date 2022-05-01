import {ApiProperty} from '@nestjs/swagger';
import {BaseGetResponseBodyDto} from '../../../common/dto/base-get-response-body.dto';
import {ProductResponseDto} from './product-response.dto';

export class ProductsResponseBodyDto extends BaseGetResponseBodyDto {
  @ApiProperty({type: [ProductResponseDto]})
  data: ProductResponseDto[];
}

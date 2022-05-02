import {ApiProperty} from '@nestjs/swagger';
import {BaseResponseBodyDto} from './../../../common/dto/base-response-body.dto';
import {ProductResponseDto} from './product-response.dto';

export class ProductsResponseBodyDto extends BaseResponseBodyDto {
  @ApiProperty({type: [ProductResponseDto]})
  data: ProductResponseDto[];
}

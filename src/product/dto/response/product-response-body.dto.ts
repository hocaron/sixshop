import {BaseResponseBodyDto} from './../../../common/dto/base-response-body.dto';
import {ApiProperty} from '@nestjs/swagger';
import {ProductResponseDto} from './product-response.dto';

export class ProductResponseBodyDto extends BaseResponseBodyDto {
  @ApiProperty()
  data: ProductResponseDto;
}

import {BaseGetResponseBodyDto} from '../../../common/dto/base-get-response-body.dto';
import {ApiProperty} from '@nestjs/swagger';
import {ProductResponseDto} from './product-response.dto';

export class ProductResponseBodyDto extends BaseGetResponseBodyDto {
  @ApiProperty()
  data: ProductResponseDto;
}

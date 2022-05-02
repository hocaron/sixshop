import {BaseResponseBodyDto} from './../../../common/dto/base-response-body.dto';
import {ApiProperty} from '@nestjs/swagger';
import {ProductCustomFieldValueResponseDto} from './product-custom-field-value-response.dto';

export class ProductCustomFieldValueResponseBodyDto extends BaseResponseBodyDto {
  @ApiProperty()
  data: ProductCustomFieldValueResponseDto;
}

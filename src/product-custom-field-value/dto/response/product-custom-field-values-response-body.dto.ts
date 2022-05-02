import {ApiProperty} from '@nestjs/swagger';
import {ProductCustomFieldValueResponseDto} from './product-custom-field-value-response.dto';
import {BaseResponseBodyDto} from './../../../common/dto/base-response-body.dto';

export class ProductCustomFieldValuesResponseBodyDto extends BaseResponseBodyDto {
  @ApiProperty({type: [ProductCustomFieldValueResponseDto]})
  data: ProductCustomFieldValueResponseDto[];
}

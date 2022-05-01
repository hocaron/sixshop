import {ApiProperty} from '@nestjs/swagger';
import {ProductCustomFieldValueResponseDto} from './product-custom-field-value-response.dto';
import {BaseGetResponseBodyDto} from '../../../common/dto/base-get-response-body.dto';

export class ProductCustomFieldValuesResponseBodyDto extends BaseGetResponseBodyDto {
  @ApiProperty({type: [ProductCustomFieldValueResponseDto]})
  data: ProductCustomFieldValueResponseDto[];
}

import {BasePostResponseBodyDto} from '../../../common/dto/base-post-response-body.dto';
import {ApiProperty} from '@nestjs/swagger';
import {ProductCustomFieldValueResponseDto} from './product-custom-field-value-response.dto';

export class ProductCustomFieldValueResponseBodyDto extends BasePostResponseBodyDto {
  @ApiProperty()
  data: ProductCustomFieldValueResponseDto;
}

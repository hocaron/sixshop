import {BasePostReponseBodyDto} from '../../../common/dto/base-post-response-body.dto';
import {ApiProperty} from '@nestjs/swagger';
import {ProductCustomFieldValueResponseDto} from './product-custom-field-value-response.dto';

export class ProductCustomFieldValueResponseBodyDto extends BasePostReponseBodyDto {
  @ApiProperty()
  data: ProductCustomFieldValueResponseDto;
}

import {ApiProperty} from '@nestjs/swagger';
import {ProductCustomFieldValueResponseDto} from './product-custom-field-value-response.dto';
import {BaseGetReponseBodyDto} from '../../../common/dto/base-get-response-body.dto';

export class ProductCustomFieldValuesResponseBodyDto extends BaseGetReponseBodyDto {
  @ApiProperty({type: [ProductCustomFieldValueResponseDto]})
  data: ProductCustomFieldValueResponseDto[];
}

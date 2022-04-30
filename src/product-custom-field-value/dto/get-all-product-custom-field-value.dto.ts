import {ApiProperty} from '@nestjs/swagger';
import {BaseGetReponseBodyDto} from '../../common/dto/base-get-response-body.dto';
import {GetProductCustomFieldValueResponseDto} from './get-product-custom-field-value.dto';

export class GetAllProductCustomFieldValueResponseBodyDto extends BaseGetReponseBodyDto {
  @ApiProperty({type: [GetProductCustomFieldValueResponseDto]})
  data: GetProductCustomFieldValueResponseDto[];
}

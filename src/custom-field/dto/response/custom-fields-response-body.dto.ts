import {ApiProperty} from '@nestjs/swagger';
import {CustomFieldResponseDto} from './custom-field-response.dto';
import {BaseGetReponseBodyDto} from '../../../common/dto/base-get-response-body.dto';

export class CustomFieldsResponseBodyDto extends BaseGetReponseBodyDto {
  @ApiProperty({type: [CustomFieldResponseDto]})
  data: CustomFieldResponseDto[];
}

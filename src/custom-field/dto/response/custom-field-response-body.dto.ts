import {BaseGetReponseBodyDto} from '../../../common/dto/base-get-response-body.dto';
import {ApiProperty} from '@nestjs/swagger';
import {GetCustomFieldResponseDto} from '../get-custom-field.dto';
import {CustomFieldResponseDto} from './custom-field-response.dto';

export class CustomFieldResponseBodyDto extends BaseGetReponseBodyDto {
  @ApiProperty()
  data: CustomFieldResponseDto;
}

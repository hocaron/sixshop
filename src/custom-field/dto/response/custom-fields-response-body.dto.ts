import {ApiProperty} from '@nestjs/swagger';
import {CustomFieldResponseDto} from './custom-field-response.dto';
import {BaseGetResponseBodyDto} from '../../../common/dto/base-get-response-body.dto';

export class CustomFieldsResponseBodyDto extends BaseGetResponseBodyDto {
  @ApiProperty({type: [CustomFieldResponseDto]})
  data: CustomFieldResponseDto[];
}

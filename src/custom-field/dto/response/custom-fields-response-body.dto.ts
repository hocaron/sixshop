import {ApiProperty} from '@nestjs/swagger';
import {CustomFieldResponseDto} from './custom-field-response.dto';
import {BaseResponseBodyDto} from './../../../common/dto/base-response-body.dto';

export class CustomFieldsResponseBodyDto extends BaseResponseBodyDto {
  @ApiProperty({type: [CustomFieldResponseDto]})
  data: CustomFieldResponseDto[];
}

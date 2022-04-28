import {ApiProperty} from '@nestjs/swagger';
import {BaseGetReponseBodyDto} from '../../common/dtos/base-get-response-body.dto';
import {GetCustomFieldResponseDto} from './get-custom-field.dto';

export class GetAllCustomFieldResponseBodyDto extends BaseGetReponseBodyDto {
  @ApiProperty({type: [GetCustomFieldResponseDto]})
  data: GetCustomFieldResponseDto[];
}
import {ApiProperty} from '@nestjs/swagger';
import {IsEnum} from 'class-validator';
import {FieldType} from '../schemas/custom-field.schema';
import {BasePostReponseBodyDto} from './../../common/dtos/base-post-response-body.dto';

export class CreateCustomFieldDto {
  @ApiProperty({example: 'phone_number', description: '사용자 정의 필드의 이름'})
  name: string;

  @IsEnum(FieldType)
  @ApiProperty({example: 'STRING', enum: FieldType, description: '사용자 정의 필드의 타입'})
  fieldType: FieldType;

  @ApiProperty({example: '고객의 핸드폰 정보', description: '사용자 정의 필드에 대한 설명'})
  description: string;
}

export class CreateCustomFieldResponseDto {
  @ApiProperty({example: 'phone_number', description: '사용자 정의 필드의 이름'})
  name: string;

  @IsEnum(FieldType)
  @ApiProperty({example: 'STRING', enum: FieldType, description: '사용자 정의 필드의 타입'})
  fieldType: FieldType;

  @ApiProperty({example: '고객의 핸드폰 정보', description: '사용자 정의 필드에 대한 설명'})
  description: string;

  @ApiProperty({example: 'a1s2d3f4g5', description: '사용자 정의 필드 ID'})
  _id: string;
}

export class CreateCustomFieldResponseBodyDto extends BasePostReponseBodyDto {
  @ApiProperty()
  data: CreateCustomFieldResponseDto;
}

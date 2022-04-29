import {ApiProperty} from '@nestjs/swagger';
import {IsArray, IsEnum, IsOptional} from 'class-validator';
import {ArrayValue} from 'src/common/types';
import {FieldType} from '../schemas/custom-field.schema';
import {BasePostReponseBodyDto} from '../../common/dto/base-post-response-body.dto';

export class CreateCustomFieldDto {
  @ApiProperty({example: 'gender', description: '사용자 정의 필드의 이름'})
  name: string;

  @IsEnum(FieldType)
  @ApiProperty({example: 'ARRAY', enum: FieldType, description: '사용자 정의 필드의 타입'})
  fieldType: FieldType;

  @IsOptional()
  @IsArray()
  @ApiProperty({
    example:
      '[{"value" : "male", "description": "남자"}, {"value" : "female", "description": "여자"}]',
    description: '사용자 정의 필드 enum에 대한 값',
  })
  arrayValue: Array<ArrayValue>;

  @ApiProperty({example: '고객의 성별 정보', description: '사용자 정의 필드에 대한 설명'})
  description: string;
}

export class CreateCustomFieldResponseDto {
  @ApiProperty({example: 'gender', description: '사용자 정의 필드의 이름'})
  name: string;

  @IsEnum(FieldType)
  @ApiProperty({example: 'ARRAY', enum: FieldType, description: '사용자 정의 필드의 타입'})
  fieldType: FieldType;

  @IsOptional()
  @IsArray()
  @ApiProperty({
    example:
      '[{"value" : "male", "description": "남자"}, {"value" : "female", "description": "여자"}]',
    description: '사용자 정의 필드 enum에 대한 값',
  })
  arrayValue: Array<ArrayValue>;

  @ApiProperty({example: '고객의 성별 정보', description: '사용자 정의 필드에 대한 설명'})
  description: string;

  @ApiProperty({example: 'a1s2d3f4g5', description: '사용자 정의 필드 ID'})
  _id: string;
}

export class CreateCustomFieldResponseBodyDto extends BasePostReponseBodyDto {
  @ApiProperty()
  data: CreateCustomFieldResponseDto;
}

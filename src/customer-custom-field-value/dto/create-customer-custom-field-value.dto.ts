import {ApiProperty} from '@nestjs/swagger';
import {BasePostReponseBodyDto} from '../../common/dto/base-post-response-body.dto';
import {Customer} from 'src/customer/schemas/customer.schema';
import {CustomField} from './../../custom-field/schemas/custom-field.schema';

export class CreateCustomerCustomFieldValueDto {
  @ApiProperty({example: '01012341234', description: '고객 관련 사용자 정의 필드의 값'})
  value: string;

  @ApiProperty({example: '1a2s3d4f', description: '고객 ID'})
  customerId: Customer;

  @ApiProperty({example: '1a2s3d4f', description: '사용자 정의 필드 ID'})
  customFieldId: CustomField;
}

export class CreateCustomerCustomFieldValueResponseDto {
  @ApiProperty({example: '01012341234', description: '고객 관련 사용자 정의 필드의 값'})
  value: string;

  @ApiProperty({example: '1a2s3d4f', description: '고객 ID'})
  customerId: Customer;

  @ApiProperty({example: '1a2s3d4f', description: '사용자 정의 필드 ID'})
  customFieldId: CustomField;

  @ApiProperty({example: 'a1s2d3f4g5', description: '사용자 정의 필드 ID'})
  _id: string;
}

export class CreateCustomerCustomFieldValueResponseBodyDto extends BasePostReponseBodyDto {
  @ApiProperty()
  data: CreateCustomerCustomFieldValueResponseDto;
}

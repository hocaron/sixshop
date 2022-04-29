import {ApiProperty} from '@nestjs/swagger';
import {BaseGetReponseBodyDto} from '../../common/dto/base-get-response-body.dto';
import {Customer} from 'src/customer/schemas/customer.schema';
import {CustomField} from '../../custom-field/schemas/custom-field.schema';
import {GetCustomerCustomFieldValueResponseDto} from './get-customer-custom-field-value.dto';

export class GetAllCustomerCustomFieldValueResponseBodyDto extends BaseGetReponseBodyDto {
  @ApiProperty({type: [GetCustomerCustomFieldValueResponseDto]})
  data: GetCustomerCustomFieldValueResponseDto[];
}

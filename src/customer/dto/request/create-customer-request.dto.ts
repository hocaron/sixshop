import {ApiProperty} from '@nestjs/swagger';
import {BasePostReponseBodyDto} from '../../../common/dto/base-post-response-body.dto';

export class CreateCustomerRequestDto {
  @ApiProperty({example: '식스샵', description: '고객 이름'})
  name: string;

  @ApiProperty({example: 'sixshop@sixshop.com', description: '고객 이메일'})
  email: string;

  @ApiProperty({example: 'sixshop', description: '고객 비밀번호'})
  password: string;
}

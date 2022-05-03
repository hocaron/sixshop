import {ApiProperty} from '@nestjs/swagger';

export class CreateCustomerRequestDto {
  @ApiProperty({example: 'testCustomer', description: '고객 이름'})
  name: string;

  @ApiProperty({example: 'test@email.com', description: '고객 이메일'})
  email: string;

  @ApiProperty({example: 'testPassword', description: '고객 비밀번호'})
  password: string;
}

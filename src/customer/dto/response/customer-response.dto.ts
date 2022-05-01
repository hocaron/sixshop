import {ApiProperty} from '@nestjs/swagger';

export class CustomerResponseDto {
  @ApiProperty({example: 'a1s2d3f4g5', description: '고객 ID'})
  _id: string;

  @ApiProperty({example: 'test', description: '고객 이름'})
  name: string;

  @ApiProperty({example: 'test@email.com', description: '고객 이메일'})
  email: string;
}

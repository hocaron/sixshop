import {ApiProperty} from '@nestjs/swagger';
import mongoose from 'mongoose';

export class CustomerResponseDto {
  @ApiProperty({example: 'a1s2d3f4g5', description: '고객 ID'})
  id: mongoose.Types.ObjectId;

  @ApiProperty({example: 'test', description: '고객 이름'})
  name: string;

  @ApiProperty({example: 'test@email.com', description: '고객 이메일'})
  email: string;
}

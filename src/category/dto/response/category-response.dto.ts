import {ApiProperty} from '@nestjs/swagger';
import mongoose from 'mongoose';

export class CategoryResponseDto {
  @ApiProperty({example: 'a1s2d3f4g5', description: '카테고리 ID'})
  id: mongoose.Types.ObjectId;

  @ApiProperty({example: 'testCategory', description: '카테고리 이름'})
  name: string;

  @ApiProperty({example: 'testCategory에 대한 설명입니다.', description: '카테고리 설명'})
  description: string;
}

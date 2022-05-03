import {ApiProperty} from '@nestjs/swagger';

export class CreateCategoryRequestDto {
  @ApiProperty({example: 'testCategory', description: '카테고리 이름'})
  name: string;

  @ApiProperty({example: 'testCategory에 대한 설명입니다.', description: '카테고리 설명'})
  description: string;
}

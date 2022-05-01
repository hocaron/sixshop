import {ApiProperty} from '@nestjs/swagger';

export class BasePostResponseBodyDto {
  @ApiProperty({example: '201'})
  code: number;

  @ApiProperty({example: ''})
  message: string;
}

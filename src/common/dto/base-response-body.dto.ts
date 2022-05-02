import {ApiProperty} from '@nestjs/swagger';

export class BaseResponseBodyDto {
  @ApiProperty({example: '200 또는 201'})
  code: number;

  @ApiProperty({example: ''})
  message: string;
}

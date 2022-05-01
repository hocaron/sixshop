import {ApiProperty} from '@nestjs/swagger';

export class BaseGetResponseBodyDto {
  @ApiProperty({example: '200'})
  code: number;

  @ApiProperty({example: ''})
  message: string;
}

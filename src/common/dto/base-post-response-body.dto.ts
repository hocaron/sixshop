import {ApiProperty} from '@nestjs/swagger';

export class BasePostReponseBodyDto {
  @ApiProperty({example: '201'})
  code: number;

  @ApiProperty({example: ''})
  message: string;
}

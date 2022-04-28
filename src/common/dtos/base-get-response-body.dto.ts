import {ApiProperty} from '@nestjs/swagger';

export class BaseGetReponseBodyDto {
  @ApiProperty({example: '200'})
  code: number;

  @ApiProperty({example: ''})
  message: string;
}

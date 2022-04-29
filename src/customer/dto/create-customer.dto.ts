import {ApiProperty} from '@nestjs/swagger';
import {BasePostReponseBodyDto} from '../../common/dto/base-post-response-body.dto';

export class CreateCustomerDto {
  @ApiProperty({example: '식스샵', description: '고객 이름'})
  name: string;

  @ApiProperty({example: 'sixshop@sixshop.com', description: '고객 이메일'})
  email: string;

  @ApiProperty({example: 'sixshop', description: '고객 비밀번호'})
  password: string;
}

export class CreateCustomerResponseDto {
  @ApiProperty({example: '식스샵', description: '고객 이름'})
  name: string;

  @ApiProperty({example: 'sixshop@sixshop.com', description: '고객 이메일'})
  email: string;

  @ApiProperty({example: 'sixshop', description: '고객 비밀번호'})
  password: string;

  @ApiProperty({example: 'a1s2d3f4g5', description: '상점 ID'})
  _id: string;
}

export class CreateCustomerResponseBodyDto extends BasePostReponseBodyDto {
  @ApiProperty()
  data: CreateCustomerResponseDto;
}

import {ApiProperty} from '@nestjs/swagger';
import {BaseGetReponseBodyDto} from '../../common/dto/base-get-response-body.dto';
import {GetProductResponseDto} from './get-product.dto';

export class GetAllProductResponseBodyDto extends BaseGetReponseBodyDto {
  @ApiProperty({type: [GetProductResponseDto]})
  data: GetProductResponseDto[];
}

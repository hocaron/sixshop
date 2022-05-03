import {ApiProperty} from '@nestjs/swagger';
import {CustomField} from '../../../custom-field/schemas/custom-field.schema';
import mongoose from 'mongoose';

export class StoreResponseDto {
  @ApiProperty({example: 'a1s2d3f4g5', description: '상점 ID'})
  id: mongoose.Types.ObjectId;

  @ApiProperty({example: 'testStore', description: '상점 이름'})
  name: string;

  @ApiProperty({example: '["1a2s3d4f"]', description: '고객 관련 사용자 정의 필드 ID'})
  customerCustomFieldIds: CustomField[];

  @ApiProperty({example: '["1a2s3d4f"]', description: '주문 관련 사용자 정의 필드 ID'})
  orderCustomFieldIds: CustomField[];
}

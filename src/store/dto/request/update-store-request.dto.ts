import {PartialType} from '@nestjs/swagger';
import {CreateStoreRequestDto} from './create-store-request.dto';

export class UpdateStoreRequestDto extends PartialType(CreateStoreRequestDto) {}

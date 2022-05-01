import {Injectable} from '@nestjs/common';
import {Customer} from './schemas/customer.schema';
import {CustomerResponseDto} from './dto/response/customer-response.dto';

@Injectable()
export class CustomerMapper {
  toResponse(entity: Customer): CustomerResponseDto {
    return {
      _id: entity.id,
      name: entity.name,
      email: entity.email,
    };
  }
}

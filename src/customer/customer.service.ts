import {Injectable, HttpException} from '@nestjs/common';
import {CreateCustomerDto, CreateCustomerResponseDto} from './dto/create-customer.dto';
import {UpdateCustomerDto} from './dto/update-customer.dto';
import {InjectModel} from '@nestjs/mongoose';
import {Customer, CustomerDocument} from 'src/customer/schemas/customer.schema';
import {Model} from 'mongoose';
import {Err} from './../common/error';
import {GetCustomerResponseDto} from './dto/get-customer.dto';

@Injectable()
export class CustomerService {
  constructor(
    @InjectModel(Customer.name) private readonly customerModel: Model<CustomerDocument>,
  ) {}

  createCustomer(createCustomerDto: CreateCustomerDto): Promise<CreateCustomerResponseDto> {
    return new this.customerModel(createCustomerDto).save();
  }

  async getCustomer(id: string): Promise<GetCustomerResponseDto> {
    const existingCustomer = await this.customerModel.findById(id).exec();
    if (!existingCustomer) {
      throw new HttpException(
        Err.CUSTOMER.NOT_FOUND_CUSTOMER.message,
        Err.CUSTOMER.NOT_FOUND_CUSTOMER.statusCode,
      );
    }
    return existingCustomer;
  }

  async updateCustomer(id: string, updateCustomerDto: UpdateCustomerDto): Promise<string> {
    const existingCustomer = await this.customerModel.findById(id).exec();
    if (!existingCustomer) {
      throw new HttpException(
        Err.CUSTOMER.NOT_FOUND_CUSTOMER.message,
        Err.CUSTOMER.NOT_FOUND_CUSTOMER.statusCode,
      );
    }
    existingCustomer.update(updateCustomerDto).exec();
    return '업데이트에 성공하였습니다.';
  }

  async deleteCustomer(id: string): Promise<string> {
    const existingCustomer = await this.customerModel.findById(id).exec();
    if (!existingCustomer) {
      throw new HttpException(
        Err.CUSTOMER.NOT_FOUND_CUSTOMER.message,
        Err.CUSTOMER.NOT_FOUND_CUSTOMER.statusCode,
      );
    }
    existingCustomer.deleteOne({id});
    return '삭제에 성공하였습니다.';
  }
}

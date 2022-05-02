import {Injectable, HttpException} from '@nestjs/common';
import {CreateCustomerRequestDto} from './dto/request/create-customer-request.dto';
import {UpdateCustomerRequestDto} from './dto/request/update-customer-request.dto';
import {InjectModel} from '@nestjs/mongoose';
import {Customer, CustomerDocument} from 'src/customer/schemas/customer.schema';
import {Model} from 'mongoose';
import {Err} from './../common/error';
import {CustomerMapper} from './customer.mapper';
import {CustomerResponseDto} from './dto/response/customer-response.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class CustomerService {
  constructor(
    @InjectModel(Customer.name) private readonly customerModel: Model<CustomerDocument>,
    private readonly mapper: CustomerMapper,
  ) {}

  async createCustomer(
    createCustomerRequestDto: CreateCustomerRequestDto,
  ): Promise<CustomerResponseDto> {
    if (await this.findByEmail(createCustomerRequestDto.email)) {
      throw new HttpException(
        Err.CUSTOMER.ALREADY_EXISTING_CUSTOMER.message,
        Err.CUSTOMER.ALREADY_EXISTING_CUSTOMER.status,
      );
    }
    createCustomerRequestDto.password = await this.hashPassword(createCustomerRequestDto.password);
    return this.mapper.toResponse(await new this.customerModel(createCustomerRequestDto).save());
  }

  async getCustomer(id: string): Promise<CustomerResponseDto> {
    const existingCustomer = await this.checkAndFindById(id);
    return this.mapper.toResponse(existingCustomer);
  }

  async updateCustomer(
    id: string,
    updateCustomerDto: UpdateCustomerRequestDto,
  ): Promise<CustomerResponseDto> {
    const existingCustomer = await this.checkAndFindById(id);
    await existingCustomer.updateOne(updateCustomerDto).exec();
    return this.mapper.toResponse(await this.findByEmail(existingCustomer.email));
  }

  async deleteCustomer(id: string): Promise<string> {
    const existingCustomer = await this.checkAndFindById(id);
    existingCustomer.deleteOne({id});
    return `${id} 삭제에 성공하였습니다.`;
  }

  private async findByEmail(email: string) {
    return await this.customerModel
      .findOne({
        email,
      })
      .exec();
  }

  private async checkAndFindById(id: string) {
    const customer = await this.customerModel.findById(id).exec();
    if (!customer) {
      throw new HttpException(
        Err.CUSTOMER.NOT_FOUND_CUSTOMER.message,
        Err.CUSTOMER.NOT_FOUND_CUSTOMER.statusCode,
      );
    }
    return customer;
  }

  private async hashPassword(password: string): Promise<string> {
    try {
      const salt = await bcrypt.genSalt();
      return await bcrypt.hash(password, salt);
    } catch (e) {
      throw new HttpException(
        Err.SERVER.UNEXPECTED_ERROR.message,
        Err.SERVER.UNEXPECTED_ERROR.statusCode,
      );
    }
  }
}

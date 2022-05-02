import {Module} from '@nestjs/common';
import {CustomerService} from './customer.service';
import {CustomerController} from './customer.controller';
import {MongooseModule} from '@nestjs/mongoose';
import {Customer, CustomerSchema} from './schemas/customer.schema';
import {CustomerMapper} from './customer.mapper';

@Module({
  imports: [MongooseModule.forFeature([{name: Customer.name, schema: CustomerSchema}])],
  controllers: [CustomerController],
  providers: [CustomerService, CustomerMapper],
  exports: [CustomerMapper],
})
export class CustomerModule {}

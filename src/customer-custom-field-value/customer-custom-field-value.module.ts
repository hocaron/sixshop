import {Module} from '@nestjs/common';
import {CustomerCustomFieldValueService} from './customer-custom-field-value.service';
import {CustomerCustomFieldValueController} from './customer-custom-field-value.controller';
import {MongooseModule} from '@nestjs/mongoose';
import {
  CustomerCustomFieldValue,
  CustomerCustomFieldValueSchema,
} from './schemas/customer-custom-field-value.schema';
import {CustomerCustomFieldValueMapper} from './customer-custom-field-value.mapper';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: CustomerCustomFieldValue.name, schema: CustomerCustomFieldValueSchema},
    ]),
  ],
  controllers: [CustomerCustomFieldValueController],
  providers: [CustomerCustomFieldValueService, CustomerCustomFieldValueMapper],
})
export class CustomerCustomFieldValueModule {}

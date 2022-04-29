import {Module} from '@nestjs/common';
import {OrderCustomFieldValueService} from './order-custom-field-value.service';
import {OrderCustomFieldValueController} from './order-custom-field-value.controller';
import {MongooseModule} from '@nestjs/mongoose';
import {
  OrderCustomFieldValue,
  OrderCustomFieldValueSchema,
} from './schemas/customer-custom-field-value.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: OrderCustomFieldValue.name, schema: OrderCustomFieldValueSchema},
    ]),
  ],
  controllers: [OrderCustomFieldValueController],
  providers: [OrderCustomFieldValueService],
})
export class OrderCustomFieldValueModule {}
import {Module} from '@nestjs/common';
import {OrderCustomFieldValueService} from './order-custom-field-value.service';
import {OrderCustomFieldValueController} from './order-custom-field-value.controller';
import {MongooseModule} from '@nestjs/mongoose';
import {
  OrderCustomFieldValue,
  OrderCustomFieldValueSchema,
} from './schemas/order-custom-field-value.schema';
import {OrderCustomFieldValueMapper} from './order-custom-field-value.mapper';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: OrderCustomFieldValue.name, schema: OrderCustomFieldValueSchema},
    ]),
  ],
  controllers: [OrderCustomFieldValueController],
  providers: [OrderCustomFieldValueService, OrderCustomFieldValueMapper],
})
export class OrderCustomFieldValueModule {}

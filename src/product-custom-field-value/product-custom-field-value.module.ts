import {Module} from '@nestjs/common';
import {ProductCustomFieldValueService} from './product-custom-field-value.service';
import {ProductCustomFieldValueController} from './product-custom-field-value.controller';
import {MongooseModule} from '@nestjs/mongoose';
import {
  ProductCustomFieldValue,
  ProductCustomFieldValueSchema,
} from './schemas/product-custom-field-value.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: ProductCustomFieldValue.name, schema: ProductCustomFieldValueSchema},
    ]),
  ],
  controllers: [ProductCustomFieldValueController],
  providers: [ProductCustomFieldValueService],
})
export class ProductCustomFieldValueModule {}

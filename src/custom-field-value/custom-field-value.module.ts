import {Module} from '@nestjs/common';
import {CustomFieldValueService} from './custom-field-value.service';
import {CustomFieldValueController} from './custom-field-value.controller';
import {MongooseModule} from '@nestjs/mongoose';
import {CustomFieldValue, CustomFieldValueSchema} from './schemas/custom-field-value.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{name: CustomFieldValue.name, schema: CustomFieldValueSchema}]),
  ],
  controllers: [CustomFieldValueController],
  providers: [CustomFieldValueService],
})
export class CustomFieldValueModule {}

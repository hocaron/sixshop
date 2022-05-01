import {Module} from '@nestjs/common';
import {CustomFieldService} from './custom-field.service';
import {CustomFieldController} from './custom-field.controller';
import {MongooseModule} from '@nestjs/mongoose';
import {CustomField, CustomFieldSchema} from './schemas/custom-field.schema';
import {CustomFieldMapper} from './custom-field.mapper';

@Module({
  imports: [MongooseModule.forFeature([{name: CustomField.name, schema: CustomFieldSchema}])],
  controllers: [CustomFieldController],
  providers: [CustomFieldService, CustomFieldMapper],
})
export class CustomFieldModule {}

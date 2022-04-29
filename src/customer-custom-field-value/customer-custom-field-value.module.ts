import {Module} from '@nestjs/common';
import {CustomerCustomFieldValueService} from './customer-custom-field-value.service';
import {CustomerCustomFieldValueController} from './customer-custom-field-value.controller';

@Module({
  controllers: [CustomerCustomFieldValueController],
  providers: [CustomerCustomFieldValueService],
})
export class CustomerCustomFieldValueModule {}

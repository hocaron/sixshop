import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import mongoose from 'mongoose';
import {Document} from 'mongoose';
import {Customer} from '../../customer/schemas/customer.schema';
import {CustomField} from '../../custom-field/schemas/custom-field.schema';

export type CustomerCustomFieldValueDocument = CustomerCustomFieldValue & Document;

@Schema()
export class CustomerCustomFieldValue {
  @Prop()
  id: string;

  @Prop({type: mongoose.Schema.Types.Mixed})
  value: any;

  @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'Customer'})
  customerId: Customer;

  @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'CustomField'})
  customFieldId: CustomField;
}

export const CustomerCustomFieldValueSchema =
  SchemaFactory.createForClass(CustomerCustomFieldValue);

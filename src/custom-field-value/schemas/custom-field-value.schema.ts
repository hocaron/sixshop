import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import mongoose from 'mongoose';
import {Document} from 'mongoose';
import {CustomField} from './../../custom-field/schemas/custom-field.schema';

export type CustomFieldValueDocument = CustomFieldValue & Document;

@Schema()
export class CustomFieldValue {
  @Prop()
  id: string;

  @Prop({type: mongoose.Schema.Types.Mixed})
  value: any;

  @Prop()
  customerId: string;

  @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'CustomField'})
  customField: CustomField;
}

export const CustomFieldValueSchema = SchemaFactory.createForClass(CustomFieldValue);

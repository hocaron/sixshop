import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import mongoose from 'mongoose';
import {Document} from 'mongoose';
import {CustomField} from './../../custom-field/schemas/custom-field.schema';

export type OrderDocument = Order & Document;

export enum Status {
  ORDER,
  CANCEL,
}

@Schema()
export class Order {
  @Prop()
  id: string;

  @Prop()
  status: Status;

  @Prop()
  price: number;

  @Prop()
  storeId: string;

  @Prop()
  customerId: string;

  @Prop([String])
  productIds: string[];

  @Prop({type: [{type: mongoose.Schema.Types.ObjectId, ref: 'CustomField'}]})
  customFields: CustomField[];
}

export const OrderSchema = SchemaFactory.createForClass(Order);

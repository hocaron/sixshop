import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import mongoose from 'mongoose';
import {Document} from 'mongoose';
import {Customer} from '../../customer/schemas/customer.schema';
import {CustomField} from '../../custom-field/schemas/custom-field.schema';
import {Order} from './../../order/schemas/order.schema';

export type OrderCustomFieldValueDocument = OrderCustomFieldValue & Document;

@Schema()
export class OrderCustomFieldValue {
  @Prop()
  id: string;

  @Prop({type: mongoose.Schema.Types.Mixed})
  value: any;

  @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'Order'})
  orderId: Order;

  @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'CustomField'})
  customFieldId: CustomField;
}

export const OrderCustomFieldValueSchema = SchemaFactory.createForClass(OrderCustomFieldValue);

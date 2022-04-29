import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import mongoose from 'mongoose';
import {Document} from 'mongoose';
import {Customer} from 'src/customer/schemas/customer.schema';
import {Product} from 'src/product/schemas/product.schema';
import {Store} from 'src/store/schemas/store.schema';

export type OrderDocument = Order & Document;

export enum Status {
  ORDER = 'ORDER',
  CANCEL = 'CANCEL',
}

@Schema()
export class Order {
  @Prop()
  id: string;

  @Prop()
  status: Status;

  @Prop()
  price: number;

  @Prop({type: [{type: mongoose.Schema.Types.ObjectId, ref: 'Store'}]})
  storeId: Store;

  @Prop({type: [{type: mongoose.Schema.Types.ObjectId, ref: 'Customer'}]})
  customerId: Customer;

  @Prop({type: [{type: mongoose.Schema.Types.ObjectId, ref: 'Product'}]})
  productIds: Product[];
}

export const OrderSchema = SchemaFactory.createForClass(Order);

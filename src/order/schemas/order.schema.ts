import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import mongoose from 'mongoose';
import {Document} from 'mongoose';
import {Customer} from 'src/customer/schemas/customer.schema';
import {Product} from 'src/product/schemas/product.schema';
import {Store} from 'src/store/schemas/store.schema';

export type OrderDocument = Order & Document;

export enum Status {
  ORDER = 'ORDER', // 주문 진행
  CANCEL = 'CANCEL', // 주문 취소
}

@Schema()
export class Order {
  _id: mongoose.Types.ObjectId;

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

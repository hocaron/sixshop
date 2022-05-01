import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document} from 'mongoose';

export type CustomerDocument = Customer & Document;

@Schema()
export class Customer {
  @Prop()
  id: string;

  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  password: string;
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);

import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import mongoose from 'mongoose';
import {Document} from 'mongoose';
import {CustomField} from './../../custom-field/schemas/custom-field.schema';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop()
  id: string;

  @Prop()
  name: string;

  @Prop()
  price: number;

  @Prop()
  storeId: string;

  @Prop([String])
  categorieIds: string[];

  @Prop({type: [{type: mongoose.Schema.Types.ObjectId, ref: 'CustomField'}]})
  customFields: CustomField[];
}

export const ProductSchema = SchemaFactory.createForClass(Product);

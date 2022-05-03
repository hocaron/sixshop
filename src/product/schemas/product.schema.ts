import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import mongoose from 'mongoose';
import {Document} from 'mongoose';
import {Category} from 'src/category/schemas/category.schema';
import {Store} from 'src/store/schemas/store.schema';
import {CustomField} from 'src/custom-field/schemas/custom-field.schema';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  _id: mongoose.Types.ObjectId;

  @Prop()
  name: string;

  @Prop()
  price: number;

  @Prop({type: [{type: mongoose.Schema.Types.ObjectId, ref: 'Store'}]})
  storeId: Store;

  @Prop({type: [{type: mongoose.Schema.Types.ObjectId, ref: 'Category'}]})
  categoryIds: Category[];

  @Prop({type: [{type: mongoose.Schema.Types.ObjectId, ref: 'CustomField'}]})
  productCustomFieldIds: CustomField[];
}

export const ProductSchema = SchemaFactory.createForClass(Product);

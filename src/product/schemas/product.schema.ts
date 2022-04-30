import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import mongoose from 'mongoose';
import {Document} from 'mongoose';
import {Category} from 'src/category/schemas/category.schema';
import {Store} from 'src/store/schemas/store.schema';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop()
  id: string;

  @Prop()
  name: string;

  @Prop()
  price: number;

  @Prop({type: [{type: mongoose.Schema.Types.ObjectId, ref: 'Store'}]})
  storeId: Store;

  @Prop({type: [{type: mongoose.Schema.Types.ObjectId, ref: 'Category'}]})
  categoryIds: Category[];
}

export const ProductSchema = SchemaFactory.createForClass(Product);

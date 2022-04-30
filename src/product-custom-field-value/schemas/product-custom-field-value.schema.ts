import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import mongoose from 'mongoose';
import {Document} from 'mongoose';
import {CustomField} from '../../custom-field/schemas/custom-field.schema';
import {Product} from 'src/product/schemas/product.schema';

export type ProductCustomFieldValueDocument = ProductCustomFieldValue & Document;

@Schema()
export class ProductCustomFieldValue {
  @Prop()
  id: string;

  @Prop({type: mongoose.Schema.Types.Mixed})
  value: any;

  @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'Product'})
  productId: Product;

  @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'CustomField'})
  customFieldId: CustomField;
}

export const ProductCustomFieldValueSchema = SchemaFactory.createForClass(ProductCustomFieldValue);

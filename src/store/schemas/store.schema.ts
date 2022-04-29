import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import mongoose from 'mongoose';
import {Document} from 'mongoose';
import {CustomField} from 'src/custom-field/schemas/custom-field.schema';

export type StoreDocument = Store & Document;

@Schema()
export class Store {
  @Prop()
  id: string;

  @Prop({unique: true})
  name: string;

  @Prop({type: [{type: mongoose.Schema.Types.ObjectId, ref: 'CustomField'}]})
  customerCustomFieldIds: CustomField[];

  @Prop({type: [{type: mongoose.Schema.Types.ObjectId, ref: 'CustomField'}]})
  productCustomFieldIds: CustomField[];

  @Prop({type: [{type: mongoose.Schema.Types.ObjectId, ref: 'CustomField'}]})
  orderCustomFieldIds: CustomField[];
}

export const StoreSchema = SchemaFactory.createForClass(Store);

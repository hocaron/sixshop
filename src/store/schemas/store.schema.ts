import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document} from 'mongoose';

export type StoreDocument = Store & Document;

@Schema()
export class Store {
  @Prop()
  id: string;

  @Prop()
  name: string;
}

export const StoreSchema = SchemaFactory.createForClass(Store);

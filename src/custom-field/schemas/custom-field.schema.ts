import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document} from 'mongoose';

export type CustomFieldDocument = CustomField & Document;

export enum FieldType {
  STRING,
  NUMBER,
  BOOLEAN,
  ARRAY,
  DATE,
}

@Schema()
export class CustomField {
  @Prop()
  id: string;

  @Prop()
  name: string;

  @Prop()
  fieldType: FieldType;

  @Prop()
  description: string;
}

export const CustomFieldSchema = SchemaFactory.createForClass(CustomField);

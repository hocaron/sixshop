import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document} from 'mongoose';
import {ArrayValue} from 'src/common/types';

export type CustomFieldDocument = CustomField & Document;

export enum FieldType {
  STRING = 'STRING',
  NUMBER = 'NUMBER',
  BOOLEAN = 'BOOLEAN',
  ARRAY = 'ARRAY',
  DATE = 'DATE',
}

@Schema()
export class CustomField {
  @Prop()
  id: string;

  @Prop()
  name: string;

  @Prop()
  arrayValue: Array<ArrayValue>;

  @Prop({enum: FieldType})
  fieldType: FieldType;

  @Prop()
  description: string;
}

export const CustomFieldSchema = SchemaFactory.createForClass(CustomField);

import {Injectable, HttpException} from '@nestjs/common';
import {CreateCustomFieldDto, CreateCustomFieldResponseDto} from './dto/create-custom-field.dto';
import {UpdateCustomFieldDto} from './dto/update-custom-field.dto';
import {InjectModel} from '@nestjs/mongoose';
import {CustomField, CustomFieldDocument} from './schemas/custom-field.schema';
import {Model} from 'mongoose';
import {Err} from './../common/error';
import {GetCustomFieldResponseDto} from './dto/get-custom-field.dto';

@Injectable()
export class CustomFieldService {
  constructor(
    @InjectModel(CustomField.name) private readonly customFieldModel: Model<CustomFieldDocument>,
  ) {}

  createCustomField(
    createCustomFieldDto: CreateCustomFieldDto,
  ): Promise<CreateCustomFieldResponseDto> {
    return new this.customFieldModel(createCustomFieldDto).save();
  }

  getAllCustomField(): Promise<GetCustomFieldResponseDto[]> {
    return this.customFieldModel.find().exec();
  }

  async getCustomField(id: string): Promise<GetCustomFieldResponseDto> {
    const existingCustomField = await this.customFieldModel.findById(id).exec();
    if (!existingCustomField) {
      throw new HttpException(
        Err.CUSTOM_FIELD.NOT_FOUND_CUSTOM_FIELD.message,
        Err.CUSTOM_FIELD.NOT_FOUND_CUSTOM_FIELD.statusCode,
      );
    }
    return existingCustomField;
  }

  async updateCustomField(id: string, updateCustomFieldDto: UpdateCustomFieldDto): Promise<string> {
    const existingCustomField = await this.customFieldModel.findById(id).exec();
    if (!existingCustomField) {
      throw new HttpException(
        Err.CUSTOM_FIELD.NOT_FOUND_CUSTOM_FIELD.message,
        Err.CUSTOM_FIELD.NOT_FOUND_CUSTOM_FIELD.statusCode,
      );
    }
    existingCustomField.update(updateCustomFieldDto).exec();
    return '업데이트에 성공하였습니다.';
  }

  async removeCustomField(id: string): Promise<string> {
    const existingCustomField = await this.customFieldModel.findById(id).exec();
    if (!existingCustomField) {
      throw new HttpException(
        Err.CUSTOM_FIELD.NOT_FOUND_CUSTOM_FIELD.message,
        Err.CUSTOM_FIELD.NOT_FOUND_CUSTOM_FIELD.statusCode,
      );
    }
    existingCustomField.deleteOne({id});
    return '삭제에 성공하였습니다.';
  }
}

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
    // 사용자 정의 필드의 타입이 ARRAY인 경우
    if (createCustomFieldDto.fieldType == 'ARRAY') {
      // 사용자 정의 필드의 타입이 ARRAY인데, ARRAY에 대한 값을 보내주지 않은 경우
      if (createCustomFieldDto.arrayValue == null)
        throw new HttpException(
          Err.CUSTOM_FIELD.NOT_SEND_ARRAY.message,
          Err.CUSTOM_FIELD.NOT_SEND_ARRAY.statusCode,
        );

      // 사용자 정의 필드의 타입이 ARRAY인데, 지정한 타입을 보내주지 않은 경우
      createCustomFieldDto.arrayValue.forEach(arrayValue => {
        if (!arrayValue.description || !arrayValue.value)
          throw new HttpException(
            Err.CUSTOM_FIELD.OBJECT_IS_NOT_MATCHED.message,
            Err.CUSTOM_FIELD.OBJECT_IS_NOT_MATCHED.statusCode,
          );
      });
    }
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
    /* Todo
    update type이 array 인 경우, 로직 추가
     */
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

  async deleteCustomField(id: string): Promise<string> {
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

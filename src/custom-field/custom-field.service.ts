import {Injectable, HttpException} from '@nestjs/common';
import {CreateCustomFieldDto} from './dto/request/create-custom-field.dto';
import {UpdateCustomFieldDto} from './dto/request/update-custom-field.dto';
import {InjectModel} from '@nestjs/mongoose';
import {CustomField, CustomFieldDocument} from './schemas/custom-field.schema';
import {Model} from 'mongoose';
import {Err} from './../common/error';
import {CustomFieldResponseDto} from './dto/response/custom-field-response.dto';
import {CategoryMapper} from '../category/category.mapper';
import {CustomFieldMapper} from './custom-field.mapper';

@Injectable()
export class CustomFieldService {
  constructor(
    @InjectModel(CustomField.name) private readonly customFieldModel: Model<CustomFieldDocument>,
    private readonly mapper: CustomFieldMapper,
  ) {}

  async createCustomField(
    createCustomFieldDto: CreateCustomFieldDto,
  ): Promise<CustomFieldResponseDto> {
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
    return this.mapper.toResponse(await new this.customFieldModel(createCustomFieldDto).save());
  }

  getAllCustomField(): Promise<CustomFieldResponseDto[]> {
    return this.customFieldModel.find().exec();
  }

  async getCustomField(id: string): Promise<CustomFieldResponseDto> {
    const existingCustomField = await this.checkAndFindById(id);
    return this.mapper.toResponse(existingCustomField);
  }

  async updateCustomField(
    id: string,
    updateCustomFieldDto: UpdateCustomFieldDto,
  ): Promise<CustomFieldResponseDto> {
    /* Todo
    update type이 array 인 경우, 로직 추가
     */
    const existingCustomField = await this.checkAndFindById(id);
    await existingCustomField.update(updateCustomFieldDto).exec();
    return this.mapper.toResponse(await this.findById(existingCustomField.id));
  }

  async deleteCustomField(id: string): Promise<string> {
    const existingCustomField = await this.checkAndFindById(id);
    existingCustomField.deleteOne({id});
    return '삭제에 성공하였습니다.';
  }

  private async findById(id: string) {
    return await this.customFieldModel
      .findOne({
        id,
      })
      .exec();
  }

  private async checkAndFindById(id: string) {
    const customField = await this.customFieldModel.findById(id).exec();
    if (!customField) {
      throw new HttpException(
        Err.CUSTOM_FIELD.NOT_FOUND_CUSTOM_FIELD.message,
        Err.CUSTOM_FIELD.NOT_FOUND_CUSTOM_FIELD.statusCode,
      );
    }
    return customField;
  }
}

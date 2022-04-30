import {Injectable, HttpException} from '@nestjs/common';
import {CreateProductCustomFieldValueDto} from './dto/create-product-custom-field-value.dto';
import {UpdateProductCustomFieldValueDto} from './dto/update-product-custom-field-value.dto';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {Err} from './../common/error';
import {
  ProductCustomFieldValue,
  ProductCustomFieldValueDocument,
} from './schemas/product-custom-field-value.schema';
import {GetProductCustomFieldValueResponseDto} from './dto/get-product-custom-field-value.dto';

@Injectable()
export class ProductCustomFieldValueService {
  constructor(
    @InjectModel(ProductCustomFieldValue.name)
    private readonly productCustomFieldValueModel: Model<ProductCustomFieldValueDocument>,
  ) {}

  createProductCustomFieldValue(
    createProductCustomFieldValueDto: CreateProductCustomFieldValueDto,
  ): Promise<CreateProductCustomFieldValueDto> {
    return new this.productCustomFieldValueModel(createProductCustomFieldValueDto).save();
  }

  async getProductCustomFieldValueByProductAndStore(
    customFieldId: string,
    productId: string,
  ): Promise<GetProductCustomFieldValueResponseDto> {
    const existingProductCustomField = await this.productCustomFieldValueModel
      .findOne({customFieldId, productId})
      .exec();
    if (!existingProductCustomField) {
      throw new HttpException(
        Err.PRODUCT_CUSTOM_FIELD.NOT_FOUND_PRODUCT_CUSTOM_FIELD.message,
        Err.PRODUCT_CUSTOM_FIELD.NOT_FOUND_PRODUCT_CUSTOM_FIELD.statusCode,
      );
    }
    return existingProductCustomField;
  }

  async getAllProductCustomFieldValueInStore(
    customFieldId: string,
  ): Promise<GetProductCustomFieldValueResponseDto[]> {
    const existingProductCustomFields = await this.productCustomFieldValueModel
      .find({customFieldId})
      .exec();
    if (!existingProductCustomFields) {
      throw new HttpException(
        Err.PRODUCT_CUSTOM_FIELD.NOT_FOUND_PRODUCT_CUSTOM_FIELD.message,
        Err.PRODUCT_CUSTOM_FIELD.NOT_FOUND_PRODUCT_CUSTOM_FIELD.statusCode,
      );
    }
    return existingProductCustomFields;
  }

  async updateProductCustomFieldValue(
    id: string,
    updateProductCustomFieldValueDto: UpdateProductCustomFieldValueDto,
  ) {
    const existingProductCustomField = await this.productCustomFieldValueModel.findById(id).exec();
    if (!existingProductCustomField) {
      throw new HttpException(
        Err.PRODUCT_CUSTOM_FIELD.NOT_FOUND_PRODUCT_CUSTOM_FIELD.message,
        Err.PRODUCT_CUSTOM_FIELD.NOT_FOUND_PRODUCT_CUSTOM_FIELD.statusCode,
      );
    }
    existingProductCustomField.update(updateProductCustomFieldValueDto).exec();
    return '업데이트에 성공하였습니다.';
  }

  async deleteProductCustomFieldValue(id: string) {
    const existingProductCustomField = await this.productCustomFieldValueModel.findById(id).exec();
    if (!existingProductCustomField) {
      throw new HttpException(
        Err.PRODUCT_CUSTOM_FIELD.NOT_FOUND_PRODUCT_CUSTOM_FIELD.message,
        Err.PRODUCT_CUSTOM_FIELD.NOT_FOUND_PRODUCT_CUSTOM_FIELD.statusCode,
      );
    }
    existingProductCustomField.deleteOne({id});
    return '삭제에 성공하였습니다.';
  }
}

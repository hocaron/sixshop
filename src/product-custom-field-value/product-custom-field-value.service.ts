import {Injectable, HttpException} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {Err} from './../common/error';
import {
  ProductCustomFieldValue,
  ProductCustomFieldValueDocument,
} from './schemas/product-custom-field-value.schema';
import {ProductCustomFieldValueResponseDto} from './dto/response/product-custom-field-value-response.dto';
import {ProductCustomFieldValueMapper} from './product-custom-field-value.mapper';
import {CreateProductCustomFieldValueRequestDto} from './dto/request/create-product-custom-field-value-request.dto';
import {UpdateProductCustomFieldValueRequestDto} from './dto/request/update-product-custom-field-value-request.dto';

@Injectable()
export class ProductCustomFieldValueService {
  constructor(
    @InjectModel(ProductCustomFieldValue.name)
    private readonly productCustomFieldValueModel: Model<ProductCustomFieldValueDocument>,
    private readonly mapper: ProductCustomFieldValueMapper,
  ) {}

  async createProductCustomFieldValue(
    createProductCustomFieldValueRequestDto: CreateProductCustomFieldValueRequestDto,
  ): Promise<ProductCustomFieldValueResponseDto> {
    return this.mapper.toResponse(
      await new this.productCustomFieldValueModel(createProductCustomFieldValueRequestDto).save(),
    );
  }

  async getProductCustomFieldValueByProductAndStore(
    customFieldId: string,
    productId: string,
  ): Promise<ProductCustomFieldValueResponseDto> {
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
  ): Promise<ProductCustomFieldValueResponseDto[]> {
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
    updateProductCustomFieldValueRequestDto: UpdateProductCustomFieldValueRequestDto,
  ): Promise<ProductCustomFieldValueResponseDto> {
    const existingProductCustomField = await this.checkAndFindById(id);
    await existingProductCustomField.update(updateProductCustomFieldValueRequestDto).exec();
    return this.mapper.toResponse(await this.findById(existingProductCustomField.id));
  }

  async deleteProductCustomFieldValue(id: string): Promise<string> {
    const existingProductCustomField = await this.checkAndFindById(id);
    existingProductCustomField.deleteOne({id});
    return `${id} 삭제에 성공하였습니다.`;
  }

  private async findById(id: string) {
    return await this.productCustomFieldValueModel
      .findOne({
        id,
      })
      .exec();
  }

  private async checkAndFindById(id: string) {
    const productCustomField = await this.productCustomFieldValueModel.findById(id).exec();
    if (!productCustomField) {
      throw new HttpException(
        Err.PRODUCT_CUSTOM_FIELD.NOT_FOUND_PRODUCT_CUSTOM_FIELD.message,
        Err.PRODUCT_CUSTOM_FIELD.NOT_FOUND_PRODUCT_CUSTOM_FIELD.statusCode,
      );
    }
    return productCustomField;
  }
}

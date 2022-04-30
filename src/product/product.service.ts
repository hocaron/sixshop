import {Injectable, HttpException} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {CreateProductDto, CreateProductResponseDto} from './dto/create-product.dto';
import {UpdateProductDto} from './dto/update-product.dto';
import {Product, ProductDocument} from 'src/product/schemas/product.schema';
import {Model} from 'mongoose';
import {Err} from './../common/error';
import {GetProductResponseDto} from './dto/get-product.dto';

@Injectable()
export class ProductService {
  constructor(@InjectModel(Product.name) private readonly productModel: Model<ProductDocument>) {}

  createProduct(createProductDto: CreateProductDto): Promise<CreateProductResponseDto> {
    return new this.productModel(createProductDto).save();
  }

  async getAllProductInStore(storeId: string): Promise<GetProductResponseDto[]> {
    const existingProducts = await this.productModel.find({storeId}).exec();
    if (!existingProducts) {
      throw new HttpException(
        Err.PRODUCT.NOT_FOUND_PRODUCT.message,
        Err.PRODUCT.NOT_FOUND_PRODUCT.statusCode,
      );
    }
    return existingProducts;
  }

  async getProduct(id: string): Promise<GetProductResponseDto> {
    const existingProduct = await this.productModel.findById(id).exec();
    if (!existingProduct) {
      throw new HttpException(
        Err.ORDER.NOT_FOUND_ORDER.message,
        Err.ORDER.NOT_FOUND_ORDER.statusCode,
      );
    }
    return existingProduct;
  }

  async updateProduct(id: string, updateProductDto: UpdateProductDto): Promise<string> {
    const existingProduct = await this.productModel.findById(id).exec();
    if (!existingProduct) {
      throw new HttpException(
        Err.ORDER.NOT_FOUND_ORDER.message,
        Err.ORDER.NOT_FOUND_ORDER.statusCode,
      );
    }
    existingProduct.update(updateProductDto).exec();
    return '업데이트에 성공하였습니다.';
  }

  async deleteProduct(id: string): Promise<string> {
    const existingProduct = await this.productModel.findById(id).exec();
    if (!existingProduct) {
      throw new HttpException(
        Err.ORDER.NOT_FOUND_ORDER.message,
        Err.ORDER.NOT_FOUND_ORDER.statusCode,
      );
    }
    existingProduct.deleteOne({id});
    return '삭제에 성공하였습니다.';
  }
}

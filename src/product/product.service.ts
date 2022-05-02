import {Injectable, HttpException} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {UpdateProductRequestDto} from './dto/request/update-product-request.dto';
import {Product, ProductDocument} from 'src/product/schemas/product.schema';
import {Model} from 'mongoose';
import {Err} from './../common/error';
import {ProductResponseDto} from './dto/response/product-response.dto';
import {ProductMapper} from './product.mapper';
import {CreateProductRequestDto} from './dto/request/create-product-request.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private readonly productModel: Model<ProductDocument>,
    private readonly mapper: ProductMapper,
  ) {}

  async createProduct(
    createProductRequestDto: CreateProductRequestDto,
  ): Promise<ProductResponseDto> {
    return this.mapper.toResponse(await new this.productModel(createProductRequestDto).save());
  }

  async getAllProductInStore(storeId: string): Promise<ProductResponseDto[]> {
    const existingProducts = await this.productModel.find({storeId}).exec();
    if (!existingProducts) {
      throw new HttpException(
        Err.PRODUCT.NOT_FOUND_PRODUCT.message,
        Err.PRODUCT.NOT_FOUND_PRODUCT.statusCode,
      );
    }
    return existingProducts.map(product => this.mapper.toResponse(product));
  }

  async getProduct(id: string): Promise<ProductResponseDto> {
    const existingProduct = await this.checkAndFindById(id);
    return this.mapper.toResponse(existingProduct);
  }

  async updateProduct(
    id: string,
    updateProductDto: UpdateProductRequestDto,
  ): Promise<ProductResponseDto> {
    const existingProduct = await this.checkAndFindById(id);
    await existingProduct.update(updateProductDto).exec();
    return this.mapper.toResponse(await this.findById(existingProduct.id));
  }

  async deleteProduct(id: string): Promise<string> {
    const existingProduct = await this.checkAndFindById(id);
    existingProduct.deleteOne({id});
    return `${id} 삭제에 성공하였습니다.`;
  }

  private async findById(id: string) {
    return await this.productModel
      .findOne({
        id,
      })
      .exec();
  }

  private async checkAndFindById(id: string) {
    const product = await this.productModel.findById(id).exec();
    if (!product) {
      throw new HttpException(
        Err.PRODUCT.NOT_FOUND_PRODUCT.message,
        Err.PRODUCT.NOT_FOUND_PRODUCT.statusCode,
      );
    }
    return product;
  }
}

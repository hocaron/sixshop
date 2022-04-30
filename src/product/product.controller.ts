import {Controller, Get, Post, Body, Patch, Param, Delete} from '@nestjs/common';
import {ProductService} from './product.service';
import {CreateProductDto} from './dto/create-product.dto';
import {UpdateProductDto} from './dto/update-product.dto';
import {ApiTags} from '@nestjs/swagger';
import {docs} from './product.docs';

@ApiTags('product')
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  @docs.createProduct('상품 생성')
  createProduct(@Body() createProductDto: CreateProductDto) {
    return this.productService.createProduct(createProductDto);
  }

  @Get(':storeId')
  @docs.getAllProductInStore('상점 내에 있는 상품 조회')
  getAllProductInStore(@Param('storeId') storeId: string) {
    return this.productService.getAllProductInStore(storeId);
  }

  @Get(':id')
  @docs.getProduct('ID로 상품 조회')
  getProduct(@Param('id') id: string) {
    return this.productService.getProduct(id);
  }

  @Patch(':id')
  @docs.updateProduct('ID로 상품 정보 업데이트')
  updateProduct(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.updateProduct(id, updateProductDto);
  }

  @Delete(':id')
  @docs.deleteProduct('ID로 상품 삭제')
  deleteProduct(@Param('id') id: string) {
    return this.productService.deleteProduct(id);
  }
}

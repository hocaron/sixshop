import {Controller, Get, Post, Body, Patch, Param, Delete} from '@nestjs/common';
import {ProductCustomFieldValueService} from './product-custom-field-value.service';
import {ApiTags} from '@nestjs/swagger';
import {docs} from './product-custom-field.docs';
import {CreateProductCustomFieldValueRequestDto} from './dto/request/create-product-custom-field-value-request.dto';
import {UpdateProductCustomFieldValueRequestDto} from './dto/request/update-product-custom-field-value-request.dto';

@ApiTags('product-custom-field-value')
@Controller('product-custom-field-value')
export class ProductCustomFieldValueController {
  constructor(private readonly productCustomFieldValueService: ProductCustomFieldValueService) {}

  @Post()
  @docs.createProductCustomFieldValue('상품 관련 사용자 정의 필드값 생성')
  createProductCustomFieldValue(
    @Body() createProductCustomFieldValueRequestDto: CreateProductCustomFieldValueRequestDto,
  ) {
    return this.productCustomFieldValueService.createProductCustomFieldValue(
      createProductCustomFieldValueRequestDto,
    );
  }

  @Get(':customFieldId/:productId')
  @docs.getProductCustomFieldValueByProductAndStore('상품 관련 사용자 정의 필드값 조회')
  getProductCustomFieldValueByProductAndStore(
    @Param('customFieldId') customFieldId: string,
    @Param('productId') productId: string,
  ) {
    return this.productCustomFieldValueService.getProductCustomFieldValueByProductAndStore(
      customFieldId,
      productId,
    );
  }

  @Get(':customFieldId')
  @docs.getAllProductCustomFieldValueInStore('상품 관련 사용자 정의 필드값 조회')
  getAllProductCustomFieldValueInStore(@Param('customFieldId') customFieldId: string) {
    return this.productCustomFieldValueService.getAllProductCustomFieldValueInStore(customFieldId);
  }

  @Patch(':id')
  @docs.updateProductCustomFieldValue('상품 관련 사용자 정의 필드값 업데이트')
  updateProductCustomFieldValue(
    @Param('id') id: string,
    @Body() updateProductCustomFieldValueRequestDto: UpdateProductCustomFieldValueRequestDto,
  ) {
    return this.productCustomFieldValueService.updateProductCustomFieldValue(
      id,
      updateProductCustomFieldValueRequestDto,
    );
  }

  @Delete(':id')
  @docs.deleteProductCustomFieldValue('상품 관련 사용자 정의 필드값 삭제')
  deleteProductCustomFieldValue(@Param('id') id: string) {
    return this.productCustomFieldValueService.deleteProductCustomFieldValue(id);
  }
}

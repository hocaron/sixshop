import {Controller, Get, Post, Body, Patch, Param, Delete} from '@nestjs/common';
import {CategoryService} from './category.service';
import {CreateCategoryDto} from './dto/create-category.dto';
import {UpdateCategoryDto} from './dto/update-category.dto';
import {docs} from './category.docs';
import {ApiTags} from '@nestjs/swagger';

@ApiTags('category')
@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  @docs.createCategory('카테고리 생성')
  createCategory(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoryService.createCategory(createCategoryDto);
  }

  @Get()
  @docs.getAllCategories('모든 카테고리 조회')
  getAllCategories() {
    return this.categoryService.getAllCategories();
  }

  @Get(':id')
  @docs.getCategory('ID로 카테고리 조회')
  getCategory(@Param('id') id: string) {
    return this.categoryService.getCategory(id);
  }

  @Patch(':id')
  @docs.updateCategory('ID로 카테고리 정보 업데이트')
  updateCategory(@Param('id') id: string, @Body() updateCategoryDto: UpdateCategoryDto) {
    return this.categoryService.updateCategory(id, updateCategoryDto);
  }

  @Delete(':id')
  @docs.deleteCategory('ID로 카테고리 식제')
  deleteCategory(@Param('id') id: string) {
    return this.categoryService.deleteCategory(id);
  }
}

import {HttpException, Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {CreateCategoryDto, CreateCategoryResponseDto} from './dto/create-category.dto';
import {UpdateCategoryDto} from './dto/update-category.dto';
import {Category, CategoryDocument} from './schemas/category.schema';
import {Model} from 'mongoose';
import {Err} from './../common/error';
import {GetCategoryResponseDto} from './dto/get-category.dto';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category.name) private readonly categoryModel: Model<CategoryDocument>,
  ) {}

  createCategory(createCategoryDto: CreateCategoryDto): Promise<CreateCategoryResponseDto> {
    return new this.categoryModel(createCategoryDto).save();
  }

  getAllCategories(): Promise<GetCategoryResponseDto[]> {
    return this.categoryModel.find().exec();
  }

  async getCategory(id: string): Promise<GetCategoryResponseDto> {
    const existingCategory = await this.categoryModel.findById(id).exec();
    if (!existingCategory) {
      throw new HttpException(
        Err.CATEGORY.NOT_FOUND_CATEGORY.message,
        Err.CATEGORY.NOT_FOUND_CATEGORY.statusCode,
      );
    }
    return existingCategory;
  }

  async updateCategory(id: string, updateCategoryDto: UpdateCategoryDto): Promise<string> {
    const existingCategory = await this.categoryModel.findById(id).exec();
    if (!existingCategory) {
      throw new HttpException(
        Err.CATEGORY.NOT_FOUND_CATEGORY.message,
        Err.CATEGORY.NOT_FOUND_CATEGORY.statusCode,
      );
    }
    existingCategory.update(updateCategoryDto).exec();
    return '업데이트에 성공하였습니다.';
  }

  async deleteCategory(id: string): Promise<string> {
    const existingCategory = await this.categoryModel.findById(id).exec();
    if (!existingCategory) {
      throw new HttpException(
        Err.CATEGORY.NOT_FOUND_CATEGORY.message,
        Err.CATEGORY.NOT_FOUND_CATEGORY.statusCode,
      );
    }
    existingCategory.deleteOne({id});
    return '삭제에 성공하였습니다.';
  }
}

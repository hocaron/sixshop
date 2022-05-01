import {HttpException, Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {CreateCategoryRequestDto} from './dto/request/create-category-request.dto';
import {UpdateCategoryRequestDto} from './dto/request/update-category-request.dto';
import {Category, CategoryDocument} from './schemas/category.schema';
import {Model} from 'mongoose';
import {Err} from './../common/error';
import {CategoryResponseDto} from './dto/response/category-response.dto';
import {CategoryMapper} from './category.mapper';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category.name) private readonly categoryModel: Model<CategoryDocument>,
    private readonly mapper: CategoryMapper,
  ) {}

  async createCategory(
    createCategoryRequestDto: CreateCategoryRequestDto,
  ): Promise<CategoryResponseDto> {
    return this.mapper.toResponse(await new this.categoryModel(createCategoryRequestDto).save());
  }

  getAllCategories(): Promise<CategoryResponseDto[]> {
    return this.categoryModel.find().exec();
  }

  async getCategory(id: string): Promise<CategoryResponseDto> {
    const existingCategory = await this.checkAndFindById(id);
    return this.mapper.toResponse(existingCategory);
  }

  async updateCategory(
    id: string,
    updateCategoryDto: UpdateCategoryRequestDto,
  ): Promise<CategoryResponseDto> {
    const existingCategory = await this.checkAndFindById(id);
    await existingCategory.update(updateCategoryDto).exec();
    return this.mapper.toResponse(await this.findById(existingCategory.id));
  }

  async deleteCategory(id: string): Promise<string> {
    const existingCategory = await this.checkAndFindById(id);
    existingCategory.deleteOne({id});
    return '${id} 삭제에 성공하였습니다.';
  }

  private async findById(id: string) {
    return await this.categoryModel
      .findOne({
        id,
      })
      .exec();
  }

  private async checkAndFindById(id: string) {
    const category = await this.categoryModel.findById(id).exec();
    if (!category) {
      throw new HttpException(
        Err.CATEGORY.NOT_FOUND_CATEGORY.message,
        Err.CATEGORY.NOT_FOUND_CATEGORY.statusCode,
      );
    }
    return category;
  }
}

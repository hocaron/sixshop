import {Module} from '@nestjs/common';
import {CategoryService} from './category.service';
import {CategoryController} from './category.controller';
import {MongooseModule} from '@nestjs/mongoose';
import {Category, CategorySchema} from './schemas/category.schema';
import {CategoryMapper} from './category.mapper';

@Module({
  imports: [MongooseModule.forFeature([{name: Category.name, schema: CategorySchema}])],
  controllers: [CategoryController],
  providers: [CategoryService, CategoryMapper],
})
export class CategoryModule {}

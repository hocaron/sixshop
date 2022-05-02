import {Module} from '@nestjs/common';
import {ProductService} from './product.service';
import {ProductController} from './product.controller';
import {MongooseModule} from '@nestjs/mongoose';
import {Product, ProductSchema} from './schemas/product.schema';
import {ProductMapper} from './product.mapper';

@Module({
  imports: [MongooseModule.forFeature([{name: Product.name, schema: ProductSchema}])],
  controllers: [ProductController],
  providers: [ProductService, ProductMapper],
})
export class ProductModule {}

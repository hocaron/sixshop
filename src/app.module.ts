import {Module} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {CustomerModule} from './customer/customer.module';
import {ProductModule} from './product/product.module';
import {OrderModule} from './order/order.module';
import {CategoryModule} from './category/category.module';
import {StoreModule} from './store/store.module';
import {MongooseModule} from '@nestjs/mongoose';
import {CustomFieldModule} from './custom-field/custom-field.module';
import {CustomFieldValueModule} from './custom-field-value/custom-field-value.module';
import {APP_FILTER, APP_INTERCEPTOR} from '@nestjs/core';
import {TransformInterceptor} from './common/interceptors/transform.interceptor';
import {HttpExceptionFilter} from './common/exceptions/httpException.filter';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: process.env.NODE_ENV == 'dev' ? '.env.dev' : '.env.prod',
    }),
    MongooseModule.forRoot('mongodb://root:root@localhost:27017/sixshop'),
    CustomerModule,
    ProductModule,
    OrderModule,
    CategoryModule,
    StoreModule,
    CustomFieldModule,
    CustomFieldValueModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: TransformInterceptor,
    },
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
export class AppModule {}

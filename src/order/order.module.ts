import {Module} from '@nestjs/common';
import {OrderService} from './order.service';
import {OrderController} from './order.controller';
import {MongooseModule} from '@nestjs/mongoose';
import {OrderSchema} from './schemas/order.schema';
import {Order} from './schemas/order.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: Order.name, schema: OrderSchema}])],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}

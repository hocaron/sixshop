import {Module} from '@nestjs/common';
import {StoreService} from './store.service';
import {StoreController} from './store.controller';
import {MongooseModule} from '@nestjs/mongoose';
import {Store, StoreSchema} from './schemas/store.schema';
import {StoreMapper} from './store.mapper';

@Module({
  imports: [MongooseModule.forFeature([{name: Store.name, schema: StoreSchema}])],
  controllers: [StoreController],
  providers: [StoreService, StoreMapper],
})
export class StoreModule {}

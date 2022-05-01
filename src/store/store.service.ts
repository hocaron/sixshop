import {Injectable, HttpException} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {CreateStoreRequestDto} from './dto/request/create-store-request.dto';
import {UpdateStoreRequestDto} from './dto/request/update-store-request.dto';
import {Store, StoreDocument} from './schemas/store.schema';
import {Model} from 'mongoose';
import {Err} from './../common/error';
import {StoreResponseDto} from './dto/response/store-response.dto';
import {StoreMapper} from './store.mapper';

@Injectable()
export class StoreService {
  constructor(
    @InjectModel(Store.name) private readonly storeModel: Model<StoreDocument>,
    private readonly mapper: StoreMapper,
  ) {}

  async createStore(createStoreDto: CreateStoreRequestDto): Promise<StoreResponseDto> {
    return this.mapper.toResponse(await new this.storeModel(createStoreDto).save());
  }

  getAllStores(): Promise<StoreResponseDto[]> {
    return this.storeModel.find().exec();
  }

  async getStore(id: string): Promise<StoreResponseDto> {
    const existingStore = await this.checkAndFindById(id);
    return this.mapper.toResponse(existingStore);
  }

  async updateStore(
    id: string,
    updateStoreRequestDto: UpdateStoreRequestDto,
  ): Promise<StoreResponseDto> {
    const existingStore = await this.checkAndFindById(id);
    await existingStore.update(updateStoreRequestDto).exec();
    return this.mapper.toResponse(await this.findById(existingStore.id));
  }

  async deleteStore(id: string): Promise<string> {
    const existingStore = await this.checkAndFindById(id);
    existingStore.deleteOne({id});
    return `${id} 삭제에 성공하였습니다.`;
  }

  private async findById(id: string) {
    return await this.storeModel
      .findOne({
        id,
      })
      .exec();
  }

  private async checkAndFindById(id: string) {
    const store = await this.storeModel.findById(id).exec();
    if (!store) {
      throw new HttpException(
        Err.STORE.NOT_FOUND_STORE.message,
        Err.STORE.NOT_FOUND_STORE.statusCode,
      );
    }
    return store;
  }
}

import {Injectable, HttpException} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {CreateStoreDto, CreateStoreResponseDto} from './dto/create-store.dto';
import {UpdateStoreDto} from './dto/update-store.dto';
import {Store, StoreDocument} from './schemas/store.schema';
import {Model} from 'mongoose';
import {Err} from './../common/error';
import {GetStoreResponseDto} from './dto/get-store.dto';

@Injectable()
export class StoreService {
  constructor(@InjectModel(Store.name) private readonly storeModel: Model<StoreDocument>) {}

  async createStore(createStoreDto: CreateStoreDto): Promise<CreateStoreResponseDto> {
    const existingStore = await this.storeModel.findOne({name: createStoreDto.name}).exec();
    if (existingStore) {
      throw new HttpException(
        Err.STORE.ALREADY_EXISTING_STORE_NAME.message,
        Err.STORE.ALREADY_EXISTING_STORE_NAME.statusCode,
      );
    }
    return new this.storeModel(createStoreDto).save();
  }

  getAllStores(): Promise<GetStoreResponseDto[]> {
    return this.storeModel.find().exec();
  }

  async getStore(id: string): Promise<GetStoreResponseDto> {
    const existingStore = await this.storeModel.findById(id).exec();
    if (!existingStore) {
      throw new HttpException(
        Err.STORE.NOT_FOUND_STORE.message,
        Err.STORE.NOT_FOUND_STORE.statusCode,
      );
    }
    return existingStore;
  }

  async updateStore(id: string, updateStoreDto: UpdateStoreDto): Promise<string> {
    const existingStore = await this.storeModel.findById(id).exec();
    if (!existingStore) {
      throw new HttpException(
        Err.STORE.NOT_FOUND_STORE.message,
        Err.STORE.NOT_FOUND_STORE.statusCode,
      );
    }
    existingStore.update(updateStoreDto).exec();
    return '업데이트에 성공하였습니다.';
  }

  async deleteStore(id: string): Promise<string> {
    const existingStore = await this.storeModel.findById(id).exec();
    if (!existingStore) {
      throw new HttpException(
        Err.STORE.NOT_FOUND_STORE.message,
        Err.STORE.NOT_FOUND_STORE.statusCode,
      );
    }
    existingStore.deleteOne({id});
    return '삭제에 성공하였습니다.';
  }
}

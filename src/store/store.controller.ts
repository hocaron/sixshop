import {Controller, Get, Post, Body, Patch, Param, Delete} from '@nestjs/common';
import {StoreService} from './store.service';
import {CreateStoreRequestDto} from './dto/request/create-store-request.dto';
import {UpdateStoreRequestDto} from './dto/request/update-store-request.dto';
import {ApiTags} from '@nestjs/swagger';
import {docs} from './store.docs';

@ApiTags('stores')
@Controller('stores')
export class StoreController {
  constructor(private readonly storeService: StoreService) {}

  @Post()
  @docs.createStore('상점 생성')
  createStore(@Body() createStoreDto: CreateStoreRequestDto) {
    return this.storeService.createStore(createStoreDto);
  }

  @Get()
  @docs.getAllStores('모든 상점 조회')
  getAllStores() {
    return this.storeService.getAllStores();
  }

  @Get(':id')
  @docs.getStore('ID로 상점 조회')
  getStore(@Param('id') id: string) {
    return this.storeService.getStore(id);
  }

  @Patch(':id')
  @docs.updateStore('ID로 상점 정보 업데이트')
  updateStore(@Param('id') id: string, @Body() updateStoreDto: UpdateStoreRequestDto) {
    return this.storeService.updateStore(id, updateStoreDto);
  }

  @Delete(':id')
  @docs.deleteStore('ID로 상점 삭제')
  deleteStore(@Param('id') id: string) {
    return this.storeService.deleteStore(id);
  }
}

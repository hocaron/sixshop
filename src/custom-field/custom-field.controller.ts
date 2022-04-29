import {Controller, Get, Post, Body, Patch, Param, Delete} from '@nestjs/common';
import {CustomFieldService} from './custom-field.service';
import {CreateCustomFieldDto} from './dto/create-custom-field.dto';
import {UpdateCustomFieldDto} from './dto/update-custom-field.dto';
import {ApiTags} from '@nestjs/swagger';
import {docs} from './custom-field.docs';

@ApiTags('custom-field')
@Controller('custom-field')
export class CustomFieldController {
  constructor(private readonly customFieldService: CustomFieldService) {}

  @Post()
  @docs.createCustomField('사용자 정의 필드 생성')
  createCustomField(@Body() createCustomFieldDto: CreateCustomFieldDto) {
    return this.customFieldService.createCustomField(createCustomFieldDto);
  }

  @Get()
  @docs.getAllCustomField('모든 사용자 정의 필드 조회')
  getAllCustomField() {
    return this.customFieldService.getAllCustomField();
  }

  @Get(':id')
  @docs.getCustomField('ID로 사용자 정의 필드 조회')
  getCustomField(@Param('id') id: string) {
    return this.customFieldService.getCustomField(id);
  }

  @Patch(':id')
  @docs.updateCustomField('ID로 사용자 정의 필드 정보 업데이트')
  updateCustomField(@Param('id') id: string, @Body() updateCustomFieldDto: UpdateCustomFieldDto) {
    return this.customFieldService.updateCustomField(id, updateCustomFieldDto);
  }

  @Delete(':id')
  @docs.deleteCustomField('ID로 사용자 정의 필드 삭제')
  deleteCustomField(@Param('id') id: string) {
    return this.customFieldService.deleteCustomField(id);
  }
}

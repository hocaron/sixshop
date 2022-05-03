import {Controller, Get, Post, Body, Patch, Param, Delete} from '@nestjs/common';
import {CustomFieldService} from './custom-field.service';
import {CreateCustomFieldDto} from './dto/request/create-custom-field.dto';
import {UpdateCustomFieldDto} from './dto/request/update-custom-field.dto';
import {ApiTags} from '@nestjs/swagger';
import {docs} from './custom-field.docs';

@ApiTags('custom-fields')
@Controller('custom-fields')
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
  @docs.getCustomField('Id로 사용자 정의 필드 조회')
  getCustomField(@Param('id') id: string) {
    return this.customFieldService.getCustomField(id);
  }

  @Patch(':id')
  @docs.updateCustomField('Id로 사용자 정의 필드 정보 업데이트')
  updateCustomField(@Param('id') id: string, @Body() updateCustomFieldDto: UpdateCustomFieldDto) {
    return this.customFieldService.updateCustomField(id, updateCustomFieldDto);
  }

  @Delete(':id')
  @docs.deleteCustomField('Id로 사용자 정의 필드 삭제')
  deleteCustomField(@Param('id') id: string) {
    return this.customFieldService.deleteCustomField(id);
  }
}

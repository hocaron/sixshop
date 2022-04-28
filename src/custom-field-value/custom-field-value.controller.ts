import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CustomFieldValueService } from './custom-field-value.service';
import { CreateCustomFieldValueDto } from './dto/create-custom-field-value.dto';
import { UpdateCustomFieldValueDto } from './dto/update-custom-field-value.dto';

@Controller('custom-field-value')
export class CustomFieldValueController {
  constructor(private readonly customFieldValueService: CustomFieldValueService) {}

  @Post()
  create(@Body() createCustomFieldValueDto: CreateCustomFieldValueDto) {
    return this.customFieldValueService.create(createCustomFieldValueDto);
  }

  @Get()
  findAll() {
    return this.customFieldValueService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customFieldValueService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCustomFieldValueDto: UpdateCustomFieldValueDto) {
    return this.customFieldValueService.update(+id, updateCustomFieldValueDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.customFieldValueService.remove(+id);
  }
}

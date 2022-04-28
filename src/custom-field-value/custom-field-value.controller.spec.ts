import { Test, TestingModule } from '@nestjs/testing';
import { CustomFieldValueController } from './custom-field-value.controller';
import { CustomFieldValueService } from './custom-field-value.service';

describe('CustomFieldValueController', () => {
  let controller: CustomFieldValueController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustomFieldValueController],
      providers: [CustomFieldValueService],
    }).compile();

    controller = module.get<CustomFieldValueController>(CustomFieldValueController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

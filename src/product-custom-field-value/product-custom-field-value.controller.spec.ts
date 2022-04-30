import {Test, TestingModule} from '@nestjs/testing';
import {ProductCustomFieldValueController} from './product-custom-field-value.controller';
import {ProductCustomFieldValueService} from './product-custom-field-value.service';

describe('ProductCustomFieldValueController', () => {
  let controller: ProductCustomFieldValueController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductCustomFieldValueController],
      providers: [ProductCustomFieldValueService],
    }).compile();

    controller = module.get<ProductCustomFieldValueController>(ProductCustomFieldValueController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import {Test, TestingModule} from '@nestjs/testing';
import {ProductCustomFieldValueService} from './product-custom-field-value.service';

describe('ProductCustomFieldValueService', () => {
  let service: ProductCustomFieldValueService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductCustomFieldValueService],
    }).compile();

    service = module.get<ProductCustomFieldValueService>(ProductCustomFieldValueService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

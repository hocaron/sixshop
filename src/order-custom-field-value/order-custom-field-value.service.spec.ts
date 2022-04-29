import {Test, TestingModule} from '@nestjs/testing';
import {OrderCustomFieldValueService} from './order-custom-field-value.service';

describe('OrderCustomFieldValueService', () => {
  let service: OrderCustomFieldValueService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrderCustomFieldValueService],
    }).compile();

    service = module.get<OrderCustomFieldValueService>(OrderCustomFieldValueService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

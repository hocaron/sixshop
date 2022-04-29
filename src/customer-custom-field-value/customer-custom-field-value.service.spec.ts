import {Test, TestingModule} from '@nestjs/testing';
import {CustomerCustomFieldValueService} from './customer-custom-field-value.service';

describe('CustomerCustomFieldValueService', () => {
  let service: CustomerCustomFieldValueService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CustomerCustomFieldValueService],
    }).compile();

    service = module.get<CustomerCustomFieldValueService>(CustomerCustomFieldValueService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

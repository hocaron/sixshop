import { Test, TestingModule } from '@nestjs/testing';
import { CustomFieldValueService } from './custom-field-value.service';

describe('CustomFieldValueService', () => {
  let service: CustomFieldValueService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CustomFieldValueService],
    }).compile();

    service = module.get<CustomFieldValueService>(CustomFieldValueService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

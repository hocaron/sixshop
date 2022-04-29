import {Test, TestingModule} from '@nestjs/testing';
import {CustomerCustomFieldValueController} from './customer-custom-field-value.controller';
import {CustomerCustomFieldValueService} from './customer-custom-field-value.service';

describe('CustomerCustomFieldValueController', () => {
  let controller: CustomerCustomFieldValueController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustomerCustomFieldValueController],
      providers: [CustomerCustomFieldValueService],
    }).compile();

    controller = module.get<CustomerCustomFieldValueController>(CustomerCustomFieldValueController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

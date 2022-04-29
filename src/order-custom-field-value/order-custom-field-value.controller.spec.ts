import {Test, TestingModule} from '@nestjs/testing';
import {OrderCustomFieldValueController} from './order-custom-field-value.controller';
import {OrderCustomFieldValueService} from './order-custom-field-value.service';

describe('OrderCustomFieldValueController', () => {
  let controller: OrderCustomFieldValueController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrderCustomFieldValueController],
      providers: [OrderCustomFieldValueService],
    }).compile();

    controller = module.get<OrderCustomFieldValueController>(OrderCustomFieldValueController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

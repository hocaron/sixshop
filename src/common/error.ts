export const Err = {
  STORE: {
    ALREADY_EXISTING_STORE_NAME: {
      statusCode: 400,
      message: '이미 존재하는 상점이름입니다.',
    },
    NOT_FOUND_STORE: {
      statusCode: 400,
      message: '존재하지 않는 상점입니다.',
    },
  },
  CUSTOM_FIELD: {
    NOT_FOUND_CUSTOM_FIELD: {
      statusCode: 400,
      message: '존재하지 않는 사용자 정의 필드입니다.',
    },
    NOT_SEND_ARRAY: {
      statusCode: 400,
      message: 'ARRAY 대한 값이 필요합니다.arrayValue를 보내주세요.',
    },
    OBJECT_IS_NOT_MATCHED: {
      statusCode: 400,
      message:
        'arrayValue에 대한 알맞은 값을 보내주세요. 예: [{"name": "남자", "value" : "male"}, {"name": "여자", "value" : "female"}]',
    },
  },
  CUSTOMER_CUSTOM_FIELD: {
    NOT_FOUND_CUSTOMER_CUSTOM_FIELD: {
      statusCode: 400,
      message: '존재하지 않는 고객 관련 사용자 정의 필드값입니다.',
    },
  },
  CUSTOMER: {
    NOT_FOUND_CUSTOMER: {
      statusCode: 400,
      message: '존재하지 않는 고객입니다.',
    },
  },
  ORDER: {
    NOT_FOUND_ORDER: {
      statusCode: 400,
      message: '존재하지 않는 주문입니다.',
    },
  },
  ORDER_CUSTOM_FIELD: {
    NOT_FOUND_ORDER_CUSTOM_FIELD: {
      statusCode: 400,
      message: '존재하지 않는 주문 관련 사용자 정의 필드값입니다.',
    },
  },
} as const;

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
    ALREADY_EXISTING_CUSTOMER: {
      status: 400,
      message: '이미 존재하는 고객입니다.',
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
  CATEGORY: {
    NOT_FOUND_CATEGORY: {
      statusCode: 400,
      message: '존재하지 않는 카테고리입니다.',
    },
  },
  PRODUCT: {
    NOT_FOUND_PRODUCT: {
      statusCode: 400,
      message: '존재하지 않는 상품입니다.',
    },
  },
  PRODUCT_CUSTOM_FIELD: {
    NOT_FOUND_PRODUCT_CUSTOM_FIELD: {
      statusCode: 400,
      message: '존재하지 않는 상품 관련 사용자 정의 필드값입니다.',
    },
  },
  SERVER: {
    UNEXPECTED_ERROR: {
      statusCode: 500,
      message: '서버에러가 발생하였습니다..',
    },
  },
} as const;

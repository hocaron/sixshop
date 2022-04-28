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
} as const;

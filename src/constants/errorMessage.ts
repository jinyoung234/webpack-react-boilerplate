export const ERROR_MESSAGE = {
  common: {
    invalidAlphabet: '영문자만 입력 가능합니다.',
    invalidNumber: '숫자만 입력 가능합니다.',
  },
  expireDate: {
    invalid: '유효기간이 만료되었습니다.',
    invalidDigit: '유효기간은 4자리(MM/YY) 숫자여야 합니다.',
    invalidMonth: '월은 1에서 12 사이여야 합니다.',
  },
} as const;

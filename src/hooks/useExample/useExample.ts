import { useState } from 'react';
import { ERROR_MESSAGE } from '../../constants/errorMessage';
import { SPACE_REGEX } from '../../constants/regex';

export const useCardNumbers = () => {
  const [cardNumbers, setCardNumbers] = useState(['', '', '', '']);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const updateCardNumberValidation = (errorMessage: string, errorState?: boolean) => {
    setIsError(errorState ?? true);
    setErrorMessage(errorMessage);
  };

  const resetCardNumberValidation = () => {
    updateCardNumberValidation('', false);
  };

  const validateCardNumber = (inputValue: string) => {
    if (inputValue.length > 4) return false;

    if (Number.isNaN(Number(inputValue))) {
      updateCardNumberValidation(ERROR_MESSAGE.common.invalidNumber);
      return false;
    }

    resetCardNumberValidation();
    return true;
  };

  const onUpdateCardNumber = (index: number, inputValue: string) => {
    if (!validateCardNumber(inputValue)) return;

    setCardNumbers((prev) => {
      const newCardNumbers = [...prev];
      newCardNumbers[index] = inputValue.replace(SPACE_REGEX, '');
      return newCardNumbers;
    });
  };

  const onBlurCardNumber = (index: number, inputValue: string) => {
    const currentCardNumbers = [...cardNumbers];

    currentCardNumbers[index] = inputValue;

    const totalLength = currentCardNumbers.reduce((acc, cardNumber) => acc + cardNumber.length, 0);

    if (inputValue.length < 4) {
      updateCardNumberValidation('카드 번호 4자리를 입력해주세요');
      return;
    }

    if (totalLength !== 16) {
      updateCardNumberValidation('카드 번호 16 자리를 입력해주세요.');
    }
  };

  return {
    cardNumbers,
    cardNumberValidation: { isError, errorMessage },
    onUpdateCardNumber,
    onBlurCardNumber,
    onFocusCardNumber: resetCardNumberValidation,
  };
};

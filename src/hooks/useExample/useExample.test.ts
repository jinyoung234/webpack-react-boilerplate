import { act, renderHook } from "@testing-library/react";
import { useCardNumbers } from "./useExample";
import { ERROR_MESSAGE } from "@constants/errorMessage";

describe("카드 번호 입력 테스트", () => {
  it.each([{ cardNumber: "a" }, { cardNumber: "지니" }, { cardNumber: "&" }])(
    "카드 번호를 숫자가 아닌 $cardNumber 로 입력할 경우, 값이 입력되지 않는다.",
    ({ cardNumber }) => {
      const { result } = renderHook(() => useCardNumbers());

      act(() => {
        result.current.onUpdateCardNumber(0, cardNumber);
      });

      expect(result.current.cardNumbers[0]).toMatch("");
      expect(result.current.cardNumberValidation.isError).toBeTruthy();
      expect(result.current.cardNumberValidation.errorMessage).toMatch(
        ERROR_MESSAGE.common.invalidNumber,
      );
    },
  );

  it("공백을 입력할 경우 값이 입력되지 않는다.", () => {
    const { result } = renderHook(() => useCardNumbers());

    act(() => {
      result.current.onUpdateCardNumber(0, " ");
    });

    expect(result.current.cardNumbers[0]).toMatch("");
  });

  it.each([{ index: 0 }, { index: 1 }, { index: 2 }, { index: 3 }])(
    '사용자가 모든 입력창을 4자리씩 입력한 상태에서 $index번째 입력창에서 "123"을 누르고 focus를 제거 할 경우 "카드 번호 4자리를 입력해주세요"와 함께 에러가 발생한다.',
    ({ index }) => {
      const { result } = renderHook(() => useCardNumbers());

      act(() => {
        [0, 1, 2, 3].forEach((changeEventCardNumberIndex) => {
          result.current.onUpdateCardNumber(changeEventCardNumberIndex, "1234");
        });
      });

      act(() => {
        result.current.onBlurCardNumber(index, "123");
      });

      expect(result.current.cardNumberValidation.isError).toBeTruthy();
      expect(result.current.cardNumberValidation.errorMessage).toMatch(
        "카드 번호 4자리를 입력해주세요",
      );
    },
  );

  it.each([{ index: 0 }, { index: 1 }, { index: 2 }, { index: 3 }])(
    '사용자가 모든 입력창을 4자리씩 입력한 상태에서 $index번째 입력창에서 "123"을 누르고 focus를 제거 할 경우 "카드 번호 4자리를 입력해주세요"와 함께 에러가 발생한다.',
    ({ index }) => {
      const { result } = renderHook(() => useCardNumbers());

      act(() => {
        if (index > 0) {
          Array.from({ length: index - 1 }, (_, inputIndex) =>
            result.current.onUpdateCardNumber(inputIndex, "1234"),
          );
        }
      });

      act(() => {
        result.current.onBlurCardNumber(index, "1234");
      });

      expect(result.current.cardNumberValidation.isError).toBeTruthy();
      expect(result.current.cardNumberValidation.errorMessage).toMatch(
        "카드 번호 16 자리를 입력해주세요",
      );
    },
  );
});

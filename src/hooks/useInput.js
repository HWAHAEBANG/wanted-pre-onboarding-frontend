import { useState } from "react";

export function useInput(initialValue, submitAction) {
  const [inputValue, setInputValue] = useState(initialValue);

  const handleChange = (e) => {
    if (typeof initialValue === "object") {
      setInputValue((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    } else {
      setInputValue(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    submitAction(e, inputValue);
  };

  return [inputValue, handleChange, handleSubmit, setInputValue];
  //setInputValue는 submit 성공시 inputVlaue를 초기화해 주기위해 사용.
  // handleSubmit 내에 구현하지 않은 이유는, 모든 keyup에 반응하는 것을 방지하기 위함.
  // 초기화가 불필요한 경우(로그인 실패시)도 고려.
  // 선택적으로 사용할 수 있도록 가장 마지막에 배치.
}

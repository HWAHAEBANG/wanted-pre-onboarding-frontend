import { useState } from "react";

export function useInput(initialValue, submitAction) {
  const [inputValue, setInputValue] = useState(initialValue);

  const handleChange = (e) => {
    console.log("뭔데", typeof initialValue, initialValue);
    if (typeof initialValue === "object") {
      console.log("오브젝트가 감지됨");
      setInputValue((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    } else {
      console.log("원시값이 감지됨");
      setInputValue(e.target.value);
    }
  };

  const handleSubmit = () => {
    // setInputValue(initialValue);
    submitAction(inputValue);
  };

  return [inputValue, handleChange, handleSubmit];
}

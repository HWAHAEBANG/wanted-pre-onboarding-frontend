import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import BlueButton from "../ui/BlueButton";
import { authContext } from "../../context/authContext";
import { isEmailValid, isPasswordValid } from "../../utils/validation";
import { useInput } from "../../hooks/useInput";
import { signin } from "../../apis/authApi";

export default function Signin() {
  const { setIsSignedIn } = useContext(authContext);
  const navigate = useNavigate();

  const submitAction = () => {
    signin({
      email: inputValue.email,
      password: inputValue.password,
    })
      .then((response) => {
        setIsSignedIn(true);
        localStorage.setItem("accessToken", response.access_token);
        navigate("/todo");
      })
      .catch((error) => {
        alert("이메일 또는 비밀번호가 올바르지 않습니다.");
        // console.log(error);
        throw new Error("Failed to sign in");
      });
  };

  const [inputValue, handleChange, handleSubmit] = useInput(
    { email: "", password: "" },
    submitAction
  );

  const validEmail = isEmailValid(inputValue.email);
  const validPassword = isPasswordValid(inputValue.password);

  return (
    <div className='h-screen flex flex-col justify-center items-center gap-1'>
      <div className=' h-16'>
        <input
          data-testid='email-input'
          onChange={handleChange}
          value={inputValue.email}
          type='email'
          name='email'
          placeholder='이메일'
          className={INPUT_STYLE}
        />
        {validEmail ? (
          ""
        ) : (
          <p className='w-96 text-xs pl-1 mb-2'>
            이메일은 "@"을 포함하여 작성해주십시오.
          </p>
        )}
      </div>
      <div className=' h-16'>
        <input
          data-testid='password-input'
          onChange={handleChange}
          value={inputValue.password}
          type='password'
          name='password'
          placeholder='비밀번호'
          className={INPUT_STYLE}
        />
        {validPassword ? (
          ""
        ) : (
          <p className='w-96 text-xs pl-1 mb-2'>비밀번호는 8자리 이상입니다.</p>
        )}
      </div>
      <button
        data-testid='signin-button'
        onClick={handleSubmit}
        disabled={!(validEmail && validPassword)}
      >
        <BlueButton
          text='로그인'
          forDisabledCss={!(validEmail && validPassword)}
        />
      </button>
    </div>
  );
}

const INPUT_STYLE =
  "w-96 h-10 rounded-md bg-white shadow-md outline-none px-3 mb-1";

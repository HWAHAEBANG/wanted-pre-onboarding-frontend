import React, { useState } from "react";
import BlueButton from "../ui/BlueButton";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { isEmailValid, isPasswordValid } from "../../utils/validation";
import { signup } from "../../apis/authApi";
import { useInput } from "../../hooks/useInput";

export default function Signup() {
  const navigate = useNavigate();

  const submitAction = () => {
    console.log("검문소9 : 회원가입 서밋");
    // if (!isEmailValid(inputValue.email)) {
    //   alert("올바른 이메일 주소를 입력하세요. @를 포함하여야 합니다.");
    // } else if (!isPasswordValid(inputValue.password)) {
    //   alert("비밀번호는 최소 8자리 이상이어야 합니다.");
    // } else {
    signup({
      email: inputValue.email,
      password: inputValue.password,
    })
      .then(() => {
        alert(
          "회원가입이 정상적으로 완료되었습니다. 로그인 페이지로 이동합니다."
        );
        navigate("/signin");
      })
      .catch((error) => {
        alert("동일한 이메일이 이미 존재합니다.");
        console.log(error);
      });
    // }
  };

  const [inputValue, handleChange, handleSubmit] = useInput(
    { email: "", password: "" },
    submitAction
  );

  const validEmail = isEmailValid(inputValue.email);
  const validPassword = isPasswordValid(inputValue.password);

  console.log("검문소17 : 회원가입 페이지 렌더링");

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
      <button data-testid='signup-button' onClick={handleSubmit}>
        <BlueButton
          text='회원가입'
          forDisabledCss={!(validEmail && validPassword)}
        />
      </button>
      <p className='mt-5'>
        이미 계정이 있으신가요?&nbsp;&nbsp;
        <Link to='/signin' className='text-gray-500'>
          로그인
        </Link>
      </p>
    </div>
  );
}

const INPUT_STYLE =
  "w-96 h-10 rounded-md bg-white shadow-md outline-none px-3 mb-1";

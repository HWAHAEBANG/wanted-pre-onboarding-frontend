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
    if (!isEmailValid(inputValue.email)) {
      alert("올바른 이메일 주소를 입력하세요. @를 포함하여야 합니다.");
    } else if (!isPasswordValid(inputValue.password)) {
      alert("비밀번호는 최소 8자리 이상이어야 합니다.");
    } else {
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
    }
  };

  const [inputValue, handleChange, handleSubmit] = useInput(
    { email: "", password: "" },
    submitAction
  );

  return (
    <div className='h-screen flex flex-col justify-center items-center gap-5'>
      <input
        onChange={handleChange}
        value={inputValue.email}
        type='email'
        name='email'
        placeholder='이메일'
        className={INPUT_STYLE}
      />
      <input
        onChange={handleChange}
        value={inputValue.password}
        type='password'
        name='password'
        placeholder='비밀번호'
        className={INPUT_STYLE}
      />
      <button data-testid='signup-button' onClick={handleSubmit}>
        <BlueButton text='회원가입' />
      </button>
      <p>
        이미 계정이 있으신가요?&nbsp;
        <Link to='/signin' className='decoration-solid'>
          로그인
        </Link>
      </p>
    </div>
  );
}

const INPUT_STYLE = "w-96 h-10 rounded-md bg-white shadow-md outline-none px-3";

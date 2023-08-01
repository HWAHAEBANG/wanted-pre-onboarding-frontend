import React, { useState } from "react";
import BlueButton from "../ui/BlueButton";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Signup() {
  const [inputValue, setInputVlaue] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setInputVlaue((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    axios({
      method: "post",
      url: "https://www.pre-onboarding-selection-task.shop/auth/signup",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        email: inputValue.email,
        password: inputValue.password,
      },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        alert("동일한 이메일이 이미 존재합니다.");
        console.log(error);
      });
  };

  console.log("확인", inputValue);

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

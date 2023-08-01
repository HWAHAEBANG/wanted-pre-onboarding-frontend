import React, { useState } from "react";
import { Link } from "react-router-dom";
import BlueButton from "../ui/BlueButton";
import axios from "axios";

export default function Signin() {
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
      url: "https://www.pre-onboarding-selection-task.shop/auth/signin",
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
        console.log(response.data.access_token);
        localStorage.setItem("accessToken", response.data.access_token);
      })
      .catch((error) => {
        alert("이메일 또는 비밀번호가 올바르지 않습니다.");
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
        <BlueButton text='로그인' />
      </button>
    </div>
  );
}

const INPUT_STYLE = "w-96 h-10 rounded-md bg-white shadow-md outline-none px-3";

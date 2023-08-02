import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import BlueButton from "../ui/BlueButton";
import axios from "axios";
import { authContext } from "../../context/authContext";
import { isEmailValid, isPasswordValid } from "../../utils/validation";
import { useInput } from "../../hooks/useInput";
import { signin } from "../../apis/authApi";

export default function Signin() {
  const { setIsSignedIn } = useContext(authContext);
  const navigate = useNavigate();

  const submitAction = () => {
    if (!isEmailValid(inputValue.email)) {
      alert("올바른 이메일 주소를 입력하세요. @를 포함하여야 합니다.");
    } else if (!isPasswordValid(inputValue.password)) {
      alert("비밀번호는 최소 8자리 이상이어야 합니다.");
    } else {
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
        <BlueButton text='로그인' />
      </button>
    </div>
  );
}

const INPUT_STYLE = "w-96 h-10 rounded-md bg-white shadow-md outline-none px-3";

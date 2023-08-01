import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import BlueButton from "../ui/BlueButton";
import axios from "axios";
import { authContext } from "../../context/authContext";

export default function Signin() {
  const { isSignedIn, setIsSignedIn } = useContext(authContext);
  const navigate = useNavigate();

  // 이하 커스텀 훅으로 리팩토링 할 것====
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
        setIsSignedIn(true);
        localStorage.setItem("accessToken", response.data.access_token);
        navigate("/todo");
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

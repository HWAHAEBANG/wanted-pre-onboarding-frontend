import React from "react";
import { Link } from "react-router-dom";
import BlueButton from "../ui/BlueButton";

export default function Signin() {
  return (
    <div className='h-screen flex flex-col justify-center items-center gap-5'>
      <input placeholder='이메일' className={INPUT_STYLE} />
      <input placeholder='비밀번호' className={INPUT_STYLE} />
      <button data-testid='signup-button'>
        <BlueButton text='로그인' />
      </button>
    </div>
  );
}

const INPUT_STYLE = "w-96 h-10 rounded-md bg-white shadow-md outline-none px-3";

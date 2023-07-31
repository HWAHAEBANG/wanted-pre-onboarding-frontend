import React from "react";
import BlueButton from "../ui/BlueButton";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className='h-screen flex flex-col justify-center items-center gap-5'>
      <input placeholder='이메일' className={INPUT_STYLE} />
      <input placeholder='비밀번호' className={INPUT_STYLE} />
      <button data-testid='signup-button'>
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

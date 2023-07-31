import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className='flex justify-center w-full h-screen'>
      <div className='w-1/2 h-auto flex flex-col justify-center items-center '>
        <div className='flex flex-col gap-10'>
          <p className='text-blue-600 font-bold text-8xl'>Welcome!</p>
          <p className='text-slate-500 font-bold text-xl leading-10'>
            Task Manager에 오신것을 환영합니다.
            <br />
            To-Do List로 더 생산적인 하루를 시작해보세요.
          </p>
          <Link
            to='/todo'
            className='bg-blue-600 p-2 rounded-md text-white hover:brightness-110 w-56 text-center'
          >
            To-Do List 바로 만나보기
          </Link>
        </div>
      </div>
      <div className='w-1/2 h-auto  flex flex-col justify-center items-center'>
        <img src='/Images/homePageImage.png' alt='메인이미지' />
      </div>
    </div>
  );
}

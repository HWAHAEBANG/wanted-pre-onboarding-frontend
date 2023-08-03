import React from "react";
import BlueButton from "../ui/BlueButton";
import { useNavigate } from "react-router";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className='flex flex-col justify-center items-center h-screen gap-2'>
      <p className='text-3xl text-blue-600 font-bold mb-5'>
        페이지를 불러올 수 없습니다.
      </p>
      <p>지속적으로 오류 발생시 관리자에게 문의 바랍니다.</p>
      <p className='mb-5'>이용에 불편을 드려 대단히 죄송합니다.</p>
      <BlueButton text='홈으로 이동' onClickEvent={() => navigate("/")} />
    </div>
  );
}

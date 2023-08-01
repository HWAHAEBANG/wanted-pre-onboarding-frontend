import React from "react";

export default function BlueButton({ text, onClickEvent }) {
  return (
    <div
      onClick={onClickEvent}
      className='bg-blue-600  px-4 py-2 rounded-md text-white hover:brightness-110 inline-block'
    >
      {text}
    </div>
  );
}

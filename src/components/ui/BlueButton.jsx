import React from "react";

export default function BlueButton({ text }) {
  return (
    <div className='bg-blue-600  px-4 py-2 rounded-md text-white hover:brightness-110 inline-block'>
      {text}
    </div>
  );
}

import React from "react";

export default function BlueButton({ text, onClickEvent, forDisabledCss }) {
  return (
    <div
      onClick={onClickEvent}
      className={
        forDisabledCss
          ? "bg-gray-400  px-4 py-2 rounded-md cursor-not-allowed text-gray-200 inline-block"
          : "bg-blue-600  px-4 py-2 rounded-md text-white hover:brightness-110 inline-block"
      }
    >
      {text}
    </div>
  );
}

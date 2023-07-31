import React from "react";
import BlueButton from "../ui/BlueButton";

export default function Todo() {
  return (
    <div className='h-screen pt-16  flex flex-col items-center gap-2'>
      <div>
        <input
          data-testid='new-todo-input'
          type='text'
          placeholder='할 일을 입력해주세요.'
          className='w-635 h-10 rounded-md bg-white shadow-md outline-none px-3'
        />
        <button data-testid='new-todo-add-button' className='p-1'>
          <BlueButton text='추가' />
        </button>
      </div>
      <ul className='w-700 flex flex-col gap-3'>
        <li className='px-4 py-1 bg-gray-100 shadow-md rounded-md flex justify-between items-center'>
          <label>
            <input type='checkbox' />
            <span className='ml-2'>TODO 1</span>
          </label>
          <div className='flex  gap-1'>
            <button data-testid='modify-button'>
              <BlueButton text='수정' />
            </button>
            <button data-testid='delete-button'>
              <BlueButton text='삭제' />
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}

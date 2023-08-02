import React, { useReducer, useState } from "react";
import BlueButton from "../ui/BlueButton";
import { toIdentifier } from "@babel/types";

export default function TodoCard({ todo, dispatch }) {
  const handleDeleteButtonClick = () => {
    dispatch({ type: "delete-todo", payload: { id: todo.id } });
  };

  const handleUpdateButtonClick = () => {
    dispatch({ type: "update-todo", payload: { id: todo.id, inputEditValue } });
    setEditMode(false);
  };

  const handleCheck = () => {
    dispatch({
      type: "check-todo",
      payload: { id: todo.id, isCompleted: todo.isCompleted },
    });
  };

  const handleUpdateKeyPress = (e) => {
    if (e.key === "Enter" && e.nativeEvent.isComposing === false) {
      dispatch({
        type: "update-todo",
        payload: { id: todo.id, inputEditValue },
      });
      setEditMode(false);
    }
  };

  //useRef로 리팩토링 예정? 아니다 나갔다 들어오면 원래대로 돌아와야하니 원시타입이 낫겠다.
  const [editMode, setEditMode] = useState(false);
  const editModeOn = () => setEditMode(true);
  const editModeOff = () => setEditMode(false);

  const [inputEditValue, setInputEditValue] = useState(todo.todo);

  const handleChange = (e) => {
    setInputEditValue(e.target.value);
  };

  console.log("수정모드", editMode);

  return (
    <li className='px-4 py-1 bg-gray-100 shadow-md rounded-md flex justify-between items-center'>
      <label>
        <input
          type='checkbox'
          checked={todo.isCompleted}
          onChange={handleCheck}
        />
        {editMode ? (
          <input
            className='ml-2 w-96 px-1 rounded-md'
            type='text'
            value={inputEditValue}
            onChange={handleChange}
            onKeyUp={handleUpdateKeyPress}
          />
        ) : (
          <span className='ml-2'>{todo.todo}</span>
        )}
      </label>
      {editMode ? (
        <div className='flex  gap-1'>
          <button data-testid='modify-button'>
            <BlueButton text='제출' onClickEvent={handleUpdateButtonClick} />
          </button>
          <button data-testid='delete-button'>
            <BlueButton text='취소' onClickEvent={editModeOff} />
          </button>
        </div>
      ) : (
        <div className='flex  gap-1'>
          <button data-testid='modify-button'>
            <BlueButton text='수정' onClickEvent={editModeOn} />
          </button>
          <button data-testid='delete-button'>
            <BlueButton text='삭제' onClickEvent={handleDeleteButtonClick} />
          </button>
        </div>
      )}
    </li>
  );
}

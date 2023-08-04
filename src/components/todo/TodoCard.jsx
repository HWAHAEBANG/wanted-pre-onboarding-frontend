import React, { memo, useState } from "react";
import BlueButton from "../ui/BlueButton";
import { deleteTodo, updateTodo } from "../../apis/todoApi";
import { useInput } from "../../hooks/useInput";

function TodoCard({ todo, dispatch }) {
  const [editMode, setEditMode] = useState(false);
  const editModeOn = () => setEditMode(true);
  const editModeOff = () => {
    setEditMode(false);
    setInputValue(todo.todo);
  };

  const submitDeleteAction = () => {
    deleteTodo(todo.id) //
      .then(dispatch({ type: "delete-todo", payload: { id: todo.id } }))
      .catch((error) => {
        // console.log(error);
        throw new Error("Failed to delete todo");
      });
  };

  const submitUpdateAction = (e) => {
    if (e.type === "change") {
      updateTodo(todo.id, todo.todo, !todo.isCompleted) //
        .then((updatedTodo) => {
          dispatch({
            type: "update-todo",
            payload: updatedTodo,
          });
          setEditMode(false);
        })
        .catch((error) => {
          // console.log(error);
          throw new Error("Failed to update todo");
        });
    } else if (
      e.type === "click" ||
      (e.type === "keyup" && e.key === "Enter")
    ) {
      updateTodo(todo.id, inputValue, todo.isCompleted) //
        .then((updatedTodo) => {
          dispatch({
            type: "update-todo",
            payload: updatedTodo,
          });
          setEditMode(false);
        })
        .catch((error) => {
          // console.log(error);
          throw new Error("Failed to update todo");
        });
    }
  };

  const [inputValue, handleChange, handleSubmit, setInputValue] = useInput(
    todo.todo,
    submitUpdateAction
  );

  return (
    <li className='px-4 py-1 bg-gray-100 shadow-md rounded-md flex justify-between items-center'>
      <label>
        <input
          type='checkbox'
          checked={todo.isCompleted}
          onChange={handleSubmit}
        />
        {editMode ? (
          <input
            data-testid='modify-input'
            className='ml-2 w-96 px-1 rounded-md'
            type='text'
            value={inputValue}
            onChange={handleChange}
            onKeyUp={handleSubmit}
          />
        ) : (
          <span className='ml-2'>{todo.todo}</span>
        )}
      </label>
      {editMode ? (
        <div className='flex  gap-1'>
          <button data-testid='submit-button' onClick={handleSubmit}>
            <BlueButton text='제출' />
          </button>
          <button data-testid='cancel-button' onClick={editModeOff}>
            <BlueButton text='취소' />
          </button>
        </div>
      ) : (
        <div className='flex  gap-1'>
          <button data-testid='modify-button' onClick={editModeOn}>
            <BlueButton text='수정' />
          </button>
          <button data-testid='delete-button' onClick={submitDeleteAction}>
            <BlueButton text='삭제' />
          </button>
        </div>
      )}
    </li>
  );
}

export default memo(TodoCard);

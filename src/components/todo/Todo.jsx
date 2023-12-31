import React, { useEffect, useReducer } from "react";
import BlueButton from "../ui/BlueButton";
import { todoReducer } from "../../reducers/todoReducer";
import TodoCard from "./TodoCard";
import { createTodo, getTodo } from "../../apis/todoApi";
import { useInput } from "../../hooks/useInput";

export default function Todo() {
  const initialState = [];
  const [todos, dispatch] = useReducer(todoReducer, initialState);

  useEffect(() => {
    getTodo() //
      .then((todos) => {
        dispatch({ type: "get-todos", payload: todos });
      })
      .catch((error) => {
        // console.log(error);
        throw new Error("Failed to fetch todo");
      });
  }, []);

  const submitCreateAction = (e) => {
    if (e.key === "Enter" && e.nativeEvent.isComposing === false) {
      if (e.type === "keyup") {
        createTodo(inputValue)
          .then((newTodo) => {
            dispatch({ type: "create-todo", payload: newTodo });
            setInputValue("");
          })
          .catch((error) => {
            // console.log(error);
            throw new Error("Failed to create todo");
          });
      }
    } else if (e.type === "click") {
      createTodo(inputValue)
        .then((newTodo) => {
          dispatch({ type: "create-todo", payload: newTodo });
          setInputValue("");
        })
        .catch((error) => {
          // console.log(error);
          throw new Error("Failed to create todo");
        });
    }
  };

  const [inputValue, handleChange, handleSubmit, setInputValue] = useInput(
    "",
    submitCreateAction
  );

  return (
    <div className='h-screen pt-16  flex flex-col items-center gap-2'>
      <div>
        <input
          data-testid='new-todo-input'
          type='text'
          value={inputValue}
          onChange={handleChange}
          onKeyUp={(e) => handleSubmit(e)}
          placeholder='할 일을 입력해주세요.'
          className='w-635 h-10 rounded-md bg-white shadow-md outline-none px-3'
        />
        <button
          data-testid='new-todo-add-button'
          onClick={(e) => handleSubmit(e)}
          className='p-1'
        >
          <BlueButton text='추가' />
        </button>
      </div>
      <ul className='w-700 flex flex-col gap-3'>
        {todos &&
          todos.map((todo) => (
            <TodoCard todo={todo} dispatch={dispatch} key={todo.id} />
          ))}
      </ul>
    </div>
  );
}

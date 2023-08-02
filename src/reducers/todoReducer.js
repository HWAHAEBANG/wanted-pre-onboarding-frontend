import { createTodo, getTodo, updateTodo, deleteItem } from "../apis/todoApi";

export const todoReducer = (state, action) => {
  switch (action.type) {
    case "create-todo":
      return [...state, action.payload.newTodo];

    case "get-todos":
      return action.payload.todos;

    case "update-todo": // 성능저하
      return state.map((todo) =>
        todo.id === action.payload.updatedTodo.id
          ? {
              ...todo,
              todo: action.payload.updatedTodo.todo,
              isCompleted: action.payload.updatedTodo.isCompleted,
            }
          : todo
      );

    case "delete-todo":
      return state.filter((todo) => todo.id !== action.payload.id);

    case "check-todo":
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, isCompleted: !action.payload.isCompleted }
          : todo
      );

    default:
      return state;
  }
};

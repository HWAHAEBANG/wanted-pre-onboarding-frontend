export const todoReducer = (state, action) => {
  switch (action.type) {
    case "create-todo":
      const newTodo = {
        id: Date.now(),
        todo: action.payload.inputValue,
        isCompleted: false,
        // userId:"",
      };
      return [...state, newTodo];
    case "update-todo":
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, todo: action.payload.inputEditValue }
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

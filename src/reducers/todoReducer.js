export const todoReducer = (state, action) => {
  switch (action.type) {
    case "create-todo":
      return [...state, action.payload];

    case "get-todos":
      return action.payload;

    case "update-todo":
      return state.map((todo) =>
        todo.id === action.payload.id
          ? {
              ...todo,
              todo: action.payload.todo,
              isCompleted: action.payload.isCompleted,
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

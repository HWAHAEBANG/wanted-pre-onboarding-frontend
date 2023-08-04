import React from "react";
import Todo from "../components/todo/Todo";
import ProtectedRoute from "../components/protected-route/ProtectedRoute";

export default function TodoPage() {
  return (
    <>
      {/* <ProtectedRoute> */}
      <Todo />
      {/* </ProtectedRoute> */}
    </>
  );
}

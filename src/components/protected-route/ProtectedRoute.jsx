import React, { useContext } from "react";
import { authContext } from "../../context/authContext";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const { isSignedIn } = useContext(authContext);

  if (
    children.type.name === "SigninPage" ||
    children.type.name === "SignupPage"
  ) {
    return isSignedIn ? <Navigate to='/todo' replace /> : children;
  } else {
    return isSignedIn ? children : <Navigate to='/signin' replace />;
  }
}

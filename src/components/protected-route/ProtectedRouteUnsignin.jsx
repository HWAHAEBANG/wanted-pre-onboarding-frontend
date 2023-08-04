import React, { useContext } from "react";
import { authContext } from "../../context/authContext";
import { Navigate } from "react-router-dom/dist";

export default function ProtectedRouteSignin({ children }) {
  const { isSignedIn } = useContext(authContext);

  return isSignedIn ? <Navigate to='/todo' replace /> : children;
}

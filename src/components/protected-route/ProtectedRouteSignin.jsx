import React, { useContext } from "react";
import { authContext } from "../../context/authContext";
import { Navigate } from "react-router-dom";

export default function ProtectedRouteUnsignin({ children }) {
  const { isSignedIn } = useContext(authContext);

  return isSignedIn ? children : <Navigate to='/signin' replace />;
}

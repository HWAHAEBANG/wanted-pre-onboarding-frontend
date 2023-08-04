import React, { useContext } from "react";
import { authContext } from "../../context/authContext";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom/dist";

export default function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { isSignedIn } = useContext(authContext);

  console.log("칠드런", children);

  if (
    children.type.name === "SigninPage" ||
    children.type.name === "SignupPage"
  ) {
    // return isSignedIn ? <Navigate to='/todo' replace /> : children;
    return isSignedIn ? navigate("/todo") : children;
  } else {
    // return isSignedIn ? children : <Navigate to='/signin' replace />;
    return isSignedIn ? children : navigate("/signin");
  }
  // return children;
}

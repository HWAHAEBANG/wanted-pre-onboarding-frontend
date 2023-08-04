import React from "react";
import Signin from "../components/signin/Signin";
import ProtectedRoute from "../components/protected-route/ProtectedRoute";

export default function SigninPage() {
  return (
    <>
      {/* <ProtectedRoute> */}
      <Signin />
      {/* </ProtectedRoute> */}
    </>
  );
}

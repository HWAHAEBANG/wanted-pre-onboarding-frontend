import React from "react";
import Signup from "../components/signup/Signup";
import ProtectedRoute from "../components/protected-route/ProtectedRoute";

export default function SignupPage() {
  return (
    <>
      {/* <ProtectedRoute> */}
      <Signup />
      {/* </ProtectedRoute> */}
    </>
  );
}

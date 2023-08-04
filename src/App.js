import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/Header";
import { Route, Routes } from "react-router-dom";
import TodoPage from "./pages/TodoPage";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";
import { authContext } from "./context/authContext";
import { useEffect, useState } from "react";
import ProtectedRoute from "./components/protected-route/ProtectedRoute";

function App() {
  const checkSigninStatus = () => {
    const isSignedIn = !!localStorage.getItem("accessToken");
    return isSignedIn;
  };

  const [isSignedIn, setIsSignedIn] = useState(checkSigninStatus());

  return (
    <>
      <authContext.Provider value={{ isSignedIn, setIsSignedIn }}>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route
            path='/todo'
            element={
              // <ProtectedRoute>
              <TodoPage />
              // </ProtectedRoute>
            }
          />
          <Route
            path='/signin'
            element={
              // <ProtectedRoute>
              <SigninPage />
              // </ProtectedRoute>
            }
          />
          <Route
            path='/signup'
            element={
              // <ProtectedRoute>
              <SignupPage />
              // </ProtectedRoute>
            }
          />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </authContext.Provider>
    </>
  );
}

export default App;

import "./App.css";
import Header from "./components/header/Header";
import { Route, Routes } from "react-router-dom";
import TodoPage from "./pages/TodoPage";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";
import { authContext } from "./context/authContext";
import { useState } from "react";
import ProtectedRouteUnsignin from "./components/protected-route/ProtectedRouteUnsignin";
import ProtectedRouteSignin from "./components/protected-route/ProtectedRouteSignin";

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
              <ProtectedRouteSignin>
                <TodoPage />
              </ProtectedRouteSignin>
            }
          />
          <Route
            path='/signin'
            element={
              <ProtectedRouteUnsignin>
                <SigninPage />
              </ProtectedRouteUnsignin>
            }
          />
          <Route
            path='/signup'
            element={
              <ProtectedRouteUnsignin>
                <SignupPage />
              </ProtectedRouteUnsignin>
            }
          />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </authContext.Provider>
    </>
  );
}

export default App;

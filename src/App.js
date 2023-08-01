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

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    localStorage.getItem("accessToken")
      ? setIsSignedIn(true)
      : setIsSignedIn(false);
  }, []);

  return (
    <>
      <authContext.Provider value={{ isSignedIn, setIsSignedIn }}>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/todo' element={<TodoPage />} />
          <Route path='/signin' element={<SigninPage />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </authContext.Provider>
    </>
  );
}

export default App;

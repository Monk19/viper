/* eslint-disable react/prop-types */
import { useState, useReducer } from "react";
import "./assets/fonts/f1.css";
import "./App.css";
import InputGuest from "./components/InputGuest";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Views/LoginSignup/Signup";
import Login from "./Views/LoginSignup/Login";
import MainBoard from "./components/Common/NavBar/Layouts/MainBoard";
function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainBoard />}>
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

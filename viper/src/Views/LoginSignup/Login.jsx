import React, { useState } from "react";
import { loginEntry } from "../../services/api";
import "./loginSignUp.css";
function Login() {
  const [loginDetails, setLoginDetails] = useState({
    userName: "",
    password: "",
  });
  const handleLogin = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setLoginDetails({ ...loginDetails, [name]: value });
  };
  return (
    <div className="signup-container">
      <div>
        <h1>Login</h1>
      </div>
      <form id="sign-upform" className="sign-up">
        <input
          type="text"
          placeholder="Please enter your userName"
          name="userName"
          onChange={handleLogin}
        />
        <input type="password" name="password" onChange={handleLogin} />
        <button
          onClick={(e) => {
            e.preventDefault();
            console.log("Input details from user", loginDetails);
            fetch(loginEntry, {
              method: "post",
              headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
              body: JSON.stringify(loginDetails),
            })
              .then((response) => {
                return response.json();
              })
              .then((data) => {
                console.log("received data from app", data);
              })
              .catch((err) => {
                console.log(err);
              });
          }}
        >
          submit
        </button>
      </form>
    </div>
  );
}

export default Login;

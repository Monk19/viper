import React, { useState } from "react";
import { signupEntry } from "../../services/api";
import "./loginSignUp.css";
function Signup() {
  const [signUpDetails, setSignUpDetails] = useState({
    userName: "",
    phoneNumber: "",
    password: "",
  });
  const HandleSignUp = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setSignUpDetails({ ...signUpDetails, [name]: value });
  };
  return (
    <div className="signup-container">
      <div>
        <h1>Signup</h1>
      </div>
      <form id="sign-upform" className="sign-up">
        <input
          type="text"
          placeholder="Please enter your userName"
          name="userName"
          onChange={HandleSignUp}
        />
        <input
          type="number"
          placeholder="Please enter your userName"
          name="phoneNumber"
          onChange={HandleSignUp}
        />
        <input type="password" name="password" onChange={HandleSignUp} />
        <button
          onClick={(e) => {
            e.preventDefault();
            console.log("Input details from user", signUpDetails);
            fetch(signupEntry, {
              method: "post",
              headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
              body: JSON.stringify(signUpDetails),
            })
              .then((res) => {
                console.log(res.data);
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

export default Signup;

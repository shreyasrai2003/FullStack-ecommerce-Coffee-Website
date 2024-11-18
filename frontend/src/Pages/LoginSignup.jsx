import React, { useState } from "react";
import "./CSS/LoginSignup.css";
const LoginSignup = () => {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const login = async () => {
    console.log("Login Used", formData);
    let responseData;
    await fetch("http://localhost:4000/login", {
      method: "Post",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => (responseData = data));

    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.error);
    }
  };
  const signup = async () => {
    console.log("Used Signup", formData);
    let responseData;
    await fetch("http://localhost:4000/signup", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => (responseData = data));
    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token);
      window.location.replace("/");
    }
  };

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state === "Sign Up" ? (
            <input
              name="username"
              value={formData.username}
              onChange={changeHandler}
              type="text"
              placeholder="Username"
              className="username"
            />
          ) : (
            <></>
          )}
          <input
            name="email"
            value={formData.email}
            onChange={changeHandler}
            type="text"
            placeholder="Email"
            className="email"
          />
          <input
            name="password"
            value={formData.password}
            onChange={changeHandler}
            type="password"
            placeholder="Password"
            className="password"
          />
        </div>
        <button
          onClick={() => {
            state === "Login" ? login() : signup();
          }}
        >
          Continue
        </button>
        {state === "Sign Up" ? (
          <div className="loginsignup-login">
            Already have an account{" "}
            <span className="signup-text"
              onClick={() => {
                setState("Login");
              }}
            >
              Login here
            </span>
          </div>
        ) : (
          <div className="loginsignup-login">
            Don't have an Account{" "}
            <span className="signup-text"
              onClick={() => {
                setState("Sign Up");
              }}
            >
              Sign Up here
            </span>
          </div>
        )}

        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <span>By continuing , i agree to the terms of use & privacy policy.</span>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;

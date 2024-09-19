import React, { useState } from "react";
import "./Css/Loginsignup.css";

export default function LoginSignup() {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });

  const login = async () => {
    console.log("Login Succes", formData);

    if (formData.email !== "" && formData.password !== "") {
      localStorage.setItem("userData", formData.value);
      window.location.replace("/");
    }
  };
  const signUp = async () => {
    console.log("Sign Up Succes", formData);
    if (
      formData.email !== "" &&
      formData.password !== "" &&
      formData.username !== ""
    ) {
      localStorage.setItem("userData", formData.value);
      window.location.replace("/");
    }
  };

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state === "Sign Up" ? (
            <input
              onChange={changeHandler}
              type="text"
              name="username"
              placeholder="Your Name"
              value={formData.username}
            />
          ) : (
            ""
          )}
          <input
            onChange={changeHandler}
            type="email"
            name="email"
            placeholder="Email Addres"
            value={formData.email}
          />
          <input
            onChange={changeHandler}
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
          />
        </div>
        <button
          onClick={() => {
            state === "Login" ? login() : signUp();
          }}>
          Continue
        </button>
        {state === "Login" ? (
          <p className="loginsignup-login">
            Create an account ?
            <span
              onClick={() => {
                setState("Sign Up");
              }}>
              Click here
            </span>
          </p>
        ) : (
          <p className="loginsignup-login">
            Already have an account ?
            <span
              onClick={() => {
                setState("Login");
              }}>
              Login here
            </span>
          </p>
        )}

        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By Continue, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
}

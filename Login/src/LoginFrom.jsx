import React from "react";
import { useDispatch } from "react-redux";
import { requestLogin } from "./action";

export default function LoginFrom(onSubmit) {
  function handleChange(event) {
    const {
      target: { name, value },
    } = event;
    onchange({ name, value });
  }
  return (
    <div>
      <div>
        <label htmlFor="login-email">Email</label>
        <input
          type="email"
          id="login-email"
          name="email"
          onchange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="login-password">Password</label>
        <input
          type="password"
          id="login-password"
          name="password"
          onchange={handleChange}
        />
      </div>
      <button type="button" onClick={onSubmit}>
        Login
      </button>
    </div>
  );
}

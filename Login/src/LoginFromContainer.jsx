import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestLogin, changeLoginField } from "./action";
import LoginFrom from "./LoginFrom";

export default function LoginFromContainer() {
  const disptch = useDispatch();
  const { email, password } = useSelector((state) => selector{
    loginFileds: state.loginFileds
  });
  function handleChange({ name, value }) {
    disptch(changeLoginField({ name, value }));
  }
  function handleSubmit() {
    disptch(requestLogin);
  }
  return (
    <div>
      <LoginFrom
        fileds={{ email, password }}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </div>
  );
}

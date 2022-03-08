import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import { logIn, logOut } from "../state/LoginReducer";

export const Login = () => {
  const [loginUser, setLoginUser] = useState({
    email: "",
    password: "",
    isLoggedIn: false
  });
  let { user } = useSelector((state) => state);

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(logIn({ ...loginUser, isLoggedIn: true }));
  };

  const handleOnChange = (e) => {
    setLoginUser({ ...loginUser, [e.target.name]: e.target.value });
  };

  const handleLogOut = () => dispatch(logOut());

  if (user?.isLoggedIn) {
    return <Redirect to="/home" />;
  }

  return (
    <div className="container">
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>Username</label>
        <input
          type="email"
          name="email"
          value={loginUser.email}
          onChange={handleOnChange}
        />
        <input
          type="password"
          name="password"
          value={loginUser.password}
          onChange={handleOnChange}
        />
        <button type="submit">Submit</button>
      </form>
      {user && <input type="button" onClick={handleLogOut} value="Logout" />}
    </div>
  );
};

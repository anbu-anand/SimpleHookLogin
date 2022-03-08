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
    // return <Redirect to="/home" />;
  }

  return (
    <div className="container">
      <div className="panel panel-default">
        <div className="panel-body">
          {!user && (
            <form className="form-control" onSubmit={(e) => handleSubmit(e)}>
              <div className="col-md-12">
                <label className="control-label">Username</label>
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  value={loginUser.email}
                  onChange={handleOnChange}
                />
              </div>
              <div className="col-md-12">
                <label className="control-label">Password</label>
                <input
                  className="form-control"
                  type="password"
                  name="password"
                  value={loginUser.password}
                  onChange={handleOnChange}
                />
              </div>
              <div className="col-md-12">
                <button className="btn btn-sm btn-success" type="submit">
                  Submit
                </button>
              </div>
            </form>
          )}
          {user && (
            <div className="row">
              <div className="col-md-8">loggedIn as {user.email}</div>
              <div className="col-md-2">
                <input
                  className="btn btn-sm btn-danger"
                  type="button"
                  onClick={handleLogOut}
                  value="Logout"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

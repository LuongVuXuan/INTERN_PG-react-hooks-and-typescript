import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Alert from "../layouts/Alert";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthen, setIsAuthen] = useState(false);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email === "admin" && password === "admin") setIsAuthen(true);
    else {
      setPassword("");
      console.log("Hien thi UI");

      let alert = document.getElementById("login-alert");
      if (alert) {
        alert.style.display = "block";

        setTimeout(() => {
          if (alert) alert.style.display = "none";
        }, 3000);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.id === "email") setEmail(e.target.value);
    else setPassword(e.target.value);
  };

  if (isAuthen) return <Redirect to="/" />;
  return (
    <div className="login-box">
      <div className="login-logo">
        <a href="#">
          <b>Admin</b>LTE
        </a>
      </div>
      {/* /.login-logo */}
      <div className="login-box-body">
        <p className="login-box-msg">Sign in to start your session</p>
        <form onSubmit={submitHandler}>
          <div className="form-group has-feedback">
            <input
              type="text"
              className="form-control"
              placeholder="Email"
              id="email"
              onChange={handleChange}
              value={email}
            />
            <span className="glyphicon glyphicon-envelope form-control-feedback" />
          </div>
          <div className="form-group has-feedback">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              id="password"
              onChange={handleChange}
              value={password}
            />
            <span className="glyphicon glyphicon-lock form-control-feedback" />
          </div>
          <Alert />
          <div className="row">
            <div className="col-xs-8">
              <div className="checkbox icheck">
                <label>
                  <div
                    className="icheckbox_square-blue"
                    aria-checked="false"
                    aria-disabled="false"
                    style={{ position: "relative" }}
                  >
                    <input
                      type="checkbox"
                      style={{
                        position: "absolute",
                        top: "-20%",
                        left: "-20%",
                        display: "block",
                        width: "140%",
                        height: "140%",
                        margin: 0,
                        padding: 0,
                        background: "rgb(255, 255, 255)",
                        border: 0,
                        opacity: 0,
                      }}
                    />
                    <ins
                      className="iCheck-helper"
                      style={{
                        position: "absolute",
                        top: "-20%",
                        left: "-20%",
                        display: "block",
                        width: "140%",
                        height: "140%",
                        margin: 0,
                        padding: 0,
                        background: "rgb(255, 255, 255)",
                        border: 0,
                        opacity: 0,
                      }}
                    />
                  </div>{" "}
                  Remember Me
                </label>
              </div>
            </div>
            {/* /.col */}
            <div className="col-xs-4">
              <button
                type="submit"
                className="btn btn-primary btn-block btn-flat"
              >
                Sign In
              </button>
            </div>
            {/* /.col */}
          </div>
        </form>
        <div className="social-auth-links text-center">
          <p>- OR -</p>
          <a
            href="#"
            className="btn btn-block btn-social btn-facebook btn-flat"
          >
            <i className="fa fa-facebook" /> Sign in using Facebook
          </a>
          <a href="#" className="btn btn-block btn-social btn-google btn-flat">
            <i className="fa fa-google-plus" /> Sign in using Google+
          </a>
        </div>
        {/* /.social-auth-links */}
        <a href="#">I forgot my password</a>
        <br />
        <a href="#" className="text-center">
          Register a new membership
        </a>
      </div>
      {/* /.login-box-body */}
    </div>
  );
}

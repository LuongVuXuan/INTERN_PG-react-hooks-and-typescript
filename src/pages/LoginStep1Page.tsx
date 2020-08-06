import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Alert from "../layouts/Alert";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { SignInOne, SignInTwo } from "../store/actions/loggedActions";

export default function LoginPage() {
  const dispatch = useDispatch();
  const isLogged = useSelector((state: any) => state.logged);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [messageAlert, setMessageAlert] = useState("");
  const [params, setParams] = useState(null);

  // sumbmit bất đồng bộ
  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let alert = document.getElementById("login-alert");
    // Kiểm tra email hợp lệ hay không
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/.test(email)) {
      if (alert) {
        setMessageAlert("Invalid email!");
        alert.style.display = "block";

        setTimeout(() => {
          if (alert) alert.style.display = "none";
        }, 3000);
      }
    } else {
      // Kiểm tra password trống hay không
      if (password.length == 0) {
        if (alert) alert.style.display = "none";
        if (alert) {
          setMessageAlert("Password not be empty");
          alert.style.display = "block";

          setTimeout(() => {
            if (alert) alert.style.display = "none";
          }, 3000);
        }
      } else {
        // Oke hết từ email đến password
        //---- giờ lấy giá trị remember
        let checkbox = document.getElementsByClassName(
          "icheckbox_square-blue"
        )[1];
        let isRemember =
          checkbox.getAttribute("aria-checked") == "true" ? true : false;

        // con quay loading
        if (alert) {
          setMessageAlert("Thay thế tạm cho vòng quay loading");
          alert.style.display = "block";
        }
        console.log(email, password, isRemember);
        await axios
          .post("https://api3.bitwage.com/sandbox/user/auth/login", {
            username: email,
            password: password,
            remember_me: isRemember,
          })
          .then((res) => {
            // Nhớ TK mật khẩu
            if (isRemember) {
              localStorage.setItem("remember_me", isRemember.toString());
              localStorage.setItem("email", email.toString());
              localStorage.setItem("password", password.toString());
            }

            localStorage.setItem("sms_count", res.data.sms_count);
            setParams(res.data);

            localStorage.setItem("stepOne", "true");
            dispatch(SignInOne());
          })
          .catch((err) => {
            setPassword("");
            if (alert) alert.style.display = "none";
            if (alert) {
              setMessageAlert("Wrong Password or User!");
              alert.style.display = "block";

              setTimeout(() => {
                if (alert) alert.style.display = "none";
              }, 3000);
            }
          });
      }
    }
  };

  // set state email or password khi thay đổi 1 trong 2
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.id === "email") setEmail(e.target.value);
    else setPassword(e.target.value);
  };

  // Thông báo validate email khi không còn focus ở input email
  const validateEmail = () => {
    let alert = document.getElementById("login-alert");
    if (alert) alert.style.display = "none";
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/.test(email)) {
      if (alert) {
        setMessageAlert("Invalid email!");
        alert.style.display = "block";

        setTimeout(() => {
          if (alert) alert.style.display = "none";
        }, 3000);
      }
    }
  };

  // Đã đăng nhập bước 1 xong thì vào bước 2
  if (isLogged.stepOne)
    return (
      <Redirect
        to={{
          pathname: process.env.PUBLIC_URL + "/verify",
          state: params,
        }}
      />
    );

  // Ko thì ra cái hiện tại
  localStorage.setItem("stepOne", "false");
  localStorage.setItem("stepTwo", "false");
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
              onBlur={validateEmail}
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
          <Alert message={messageAlert} />
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
                  {/* <input
                    type="checkbox"
                    name="savepassword"
                    id="save-password"
                  />{" "} */}
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

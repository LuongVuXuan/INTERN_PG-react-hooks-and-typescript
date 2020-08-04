import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

export default function LoginStep2Page(props: any) {
  let { phone_number, username, uuid } = props.location.state;
  const [accessToken, setAccessToken] = useState("");
  const [count, setCount] = useState(Number(localStorage.getItem("sms_count")));
  const [isAuthen, setIsAuthen] = useState(false);

  const handleOnChange = (e: any) => {
    setAccessToken(e.target.value);
  };

  const handleSubmit = async () => {
    let loading = Array.from(
      document.getElementsByClassName("loading") as HTMLCollectionOf<
        HTMLElement
      >
    )[0];
    loading.style.display = "flex";
    console.log(accessToken, username, uuid);
    await axios
      .post("https://api3.bitwage.com/sandbox/user/auth/twofa", {
        access_token: accessToken,
        username: username,
        uuid: uuid,
      })
      .then((res) => {
        loading.style.display = "none";
        localStorage.setItem("user_info", JSON.stringify(res.data));
        setIsAuthen(true);
      })
      .catch((err) => {
        console.log(err);
        let out = count - 1;

        loading.style.display = "none";
        localStorage.setItem("sms_count", out.toString());
        if (out == 0) window.location.href = process.env.PUBLIC_URL + "/";

        let alert = Array.from(
          document.getElementsByClassName(
            "alert-access-code"
          ) as HTMLCollectionOf<HTMLElement>
        )[0];
        alert.style.visibility = "visible";
        setCount(out);
      });
  };

  return isAuthen ? (
    <Redirect
      to={{
        pathname: process.env.PUBLIC_URL + "/index",
      }}
    />
  ) : (
    <div className="login-page-2">
      <div className="loading">
        <img src={process.env.PUBLIC_URL + "/loading.gif"} />
      </div>
      <div className="card-center">
        <div className="card-title">
          <i className="fa fa-key"></i>
          <p>Verify code</p>
        </div>
        <div className="card-content">
          <p>Enter the access code sent via SMS to</p>
          <p className="text-blue">
            +{phone_number.slice(0, 2)} XXXXXXX{" "}
            {phone_number.slice(phone_number.length - 2, phone_number.length)}
          </p>

          <i className="fa fa-key text-gray"></i>
          <input
            type="text"
            name="access-code"
            id="access-code"
            placeholder="Access Code"
            onChange={(e) => handleOnChange(e)}
          />
          <div>
            <p className="alert-access-code">Invalid Access Code</p>
          </div>
          <div className="two-button">
            <div className="btn btn-resend">
              <i className="fa fa-mobile">
                {"\u00A0"}
                {"\u00A0"}
              </i>
              {`Resend (${count ? count : 0})`}
            </div>
            <div className="btn btn-submit" onClick={handleSubmit}>
              <i className="fa fa-paper-plane">
                {"\u00A0"}
                {"\u00A0"}
              </i>
              Submit
            </div>
            <p className="company">{"\u00a9"}Bitwage Inc, 2014-2020</p>
          </div>
        </div>
      </div>
    </div>
  );
}

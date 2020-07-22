import React from "react";

export default function Alert() {
  return (
    <div className="alert alert-danger alert-dismissible" id="login-alert">
      <button
        type="button"
        className="close"
        data-dismiss="alert"
        aria-hidden="true"
      >
        ×
      </button>
      <h4>
        <i className="icon fa fa-ban" /> Sai mật khẩu hoặc password
      </h4>
    </div>
  );
}

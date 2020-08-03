import React from "react";

export default function Alert(props: any) {
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
        <i className="icon fa fa-ban" /> {props.message}
      </h4>
    </div>
  );
}

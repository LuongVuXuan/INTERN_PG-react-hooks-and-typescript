import React from "react";
import styled from "styled-components";

export default function Footer() {
  const Footer = styled.div`
    height: 10%;
  `;

  return (
    <Footer className="red-border">
      <footer className="main-footer">
        <div className="pull-right hidden-xs">
          <b>Version</b> 2.4.13
        </div>
        <strong>
          Copyright © 2014-2019 <a href="https://adminlte.io">AdminLTE</a>.
        </strong>{" "}
        All rights reserved.
      </footer>
    </Footer>
  );
}

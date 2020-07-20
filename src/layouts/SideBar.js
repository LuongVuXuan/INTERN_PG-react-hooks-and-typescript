import React from "react";
import styled from "styled-components";

export default function SideBar() {
  const SideBar = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 300px;
    height: 100vh;
  `;

  return <SideBar className="red-border">Side bar Layout</SideBar>;
}

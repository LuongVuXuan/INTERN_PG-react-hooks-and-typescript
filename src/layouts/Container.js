import React from "react";
import styled from "styled-components";

export default function Header() {
  const Container = styled.div`
    height: calc(80% - 4px);
    margin: 2px 0;
  `;

  return <Container className="red-border">Container Layout</Container>;
}

import React from "react";
import Header from "../layouts/header/Header";
import SideBar from "../layouts/SideBar";
import Footer from "../layouts/Footer";
import Container from "../layouts/Container";

export default function LoggedInPage() {
  return (
    <div className="wrapper">
      <Header />
      <SideBar />

      <Container />
      <Footer />
    </div>
  );
}

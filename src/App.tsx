import React from "react";
import SideBar from "./layouts/SideBar";
import Header from "./layouts/header/Header";
import Container from "./layouts/Container";
import Footer from "./layouts/Footer";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <SideBar />
      {/* Container sẽ lại gồm content header */}
      <Container />
      <Footer />
    </div>
  );
}

export default App;

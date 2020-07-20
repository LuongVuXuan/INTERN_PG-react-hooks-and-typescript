import React from "react";
import SideBar from "./layouts/SideBar";
import Header from "./layouts/Header";
import Container from "./layouts/Container";
import Footer from "./layouts/Footer";

function App() {
  return (
    <div className="App">
      <SideBar />
      <div className="content">
        <Header />
        <Container />
        <Footer />
      </div>
    </div>
  );
}

export default App;

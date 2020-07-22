import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import LoggedInPage from "./pages/LoggedInPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/" component={LoggedInPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

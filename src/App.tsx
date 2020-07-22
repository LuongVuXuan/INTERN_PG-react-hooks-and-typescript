import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoggedInPage from "./pages/LoggedInPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={LoginPage} exact/>
        <Route path="/index" component={LoggedInPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

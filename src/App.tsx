import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoggedInPage from "./pages/LoggedInPage";
import LoginStep1Page from "./pages/LoginStep1Page";
import LoginStep2Page from "./pages/LoginStep2Page";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path={process.env.PUBLIC_URL + "/"}
          component={LoginStep1Page}
          exact
        />
        <Route
          path={process.env.PUBLIC_URL + "/verify"}
          component={LoginStep2Page}
        />
        <Route
          path={process.env.PUBLIC_URL + "/index"}
          component={LoggedInPage}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

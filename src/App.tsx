import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoggedInPage from "./pages/LoggedInPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path={process.env.PUBLIC_URL + "/"}
          component={LoginPage}
          exact
        />
        <Route path={process.env.PUBLIC_URL + "/index"} component={LoggedInPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

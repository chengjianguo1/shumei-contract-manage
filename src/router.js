import React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import App from "./App";
import Layout from "./layout";
import Home from "./pages/home";
import NoMatch from "./pages/noMatch";

export default class Router extends React.Component {
  render() {
    return (
      <HashRouter>
        <App>
          <Switch>
            <Route
              path="/"
              render={() => (
                <Layout>
                  <Switch>
                    <Route path="/home" component={Home}></Route>
                    <Route path="/noMatch" component={NoMatch}></Route>
                    <Redirect to="/NoMatch" />
                  </Switch>
                </Layout>
              )}
            ></Route>
          </Switch>
        </App>
      </HashRouter>
    );
  }
}

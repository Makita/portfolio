import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { hot } from "react-hot-loader";

import Navbar from "Components/Navbar/navbar";
import Main from "Components/Main/main";

import "./App.scss";
import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route path="/" component={Main} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default hot(module)(App);

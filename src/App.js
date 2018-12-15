import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';

import Main from 'Components/Main/main';

import './App.scss';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={Main} />
      </Switch>
    );
  }
}

export default hot(module)(App);
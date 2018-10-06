import React, { Component } from 'react';
import './App.scss';

import Name from './name/name.js'
import About from './about/about.js'

class App extends Component {
  onScroll() {
    let windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    let currentScroll = window.scrollY;

    if(currentScroll < windowHeight / 2) {
      document.body.className = "";
    } else if(currentScroll > windowHeight / 2 && currentScroll < 2 * windowHeight) {
      document.body.className = "about_bg";
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }

  render() {
    return (
      <React.Fragment>
        <Name />
        <About />
      </React.Fragment>
    );
  }
}

export default App;

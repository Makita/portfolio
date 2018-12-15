import React, { Component } from "react";
import { Growl } from "primereact/growl";

import style from "./splash.scss";

import photo from "Assets/images/photo.jpg";

export default class Splash extends Component {
  componentDidMount() {
    this.growl.show([
      {
        life: 10000,
        severity: "info",
        summary: "Welcome!",
        detail:
          "I'm excited to show you around! Just start scrolling down to see what I've done over the years!"
      },
      {
        life: 20000,
        severity: "info",
        summary: "About the Navbar",
        detail:
          "References and download links are available on other pages of my portfolio, so make sure to check those out too!"
      }
    ]);
  }

  render() {
    return (
      <div className={style.container}>
        <Growl ref={el => (this.growl = el)} />
        <div className={style.content}>
          <div className={style.photo}>
            <img src={photo} alt="self picture" />
          </div>
          <div>
            <div className={style.name}>Justin Choi</div>
            <div className={style.tagline}>
              Ruby on Rails/React Web Developer
            </div>
          </div>
        </div>
      </div>
    );
  }
}

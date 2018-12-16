import React from "react";

import Splash from "Components/Splash/splash";
import About from "Components/About/about";
import Timeline from "Components/Timeline/timeline";
import Navbar from "Components/Navbar/navbar";

const Main = () => (
  <React.Fragment>
    <Splash />
    <About />
    <Timeline />
    <Navbar />
  </React.Fragment>
);

export default Main;

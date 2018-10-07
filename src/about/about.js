import React, { Component } from 'react';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
  }

  handleClick(e) {
    e.preventDefault();
    this.setState((state, props) => ({
      isClicked: !state.isClicked
    }));

    let introElement = document.getElementById("introduction");
    let techElement = document.getElementById("technologies");
    let arrowElement = document.getElementById("click_arrow");
    if(this.state.isClicked) {
      introElement.className = "slidein";
      techElement.className = "slidein";
      arrowElement.className = "arrow_left";
    } else {
      introElement.className = "";
      techElement.className = "";
      arrowElement.className = "";
    }
  }

  render() {
    return (
      <div id="about">
        <div id="introduction">
          <h2>Let me introduce myself</h2>
          <div className="middle_container">
            <p>Having started poking away at a keyboard from five years old and even gotten my toes wet with ASM and C, I was on the road to computer development before I could even consider employment. I believe that, especially with us being in the "Information Age", knowledge is power. And what other way to gain power but to simply learn more? My thirst for knowledge is only superceded by my desire to put that knowledge into action. I enjoy taking everything that I know and placing it against new challenges.</p>
            <p>I specialize in back end development but can also hold my own in the front end. Just don't ask me to create an artistic masterpiece. But while I may have a tendency to leave art up to the design specialists, I make up for it with my specialty in the processing. I know that uptime is a key concern and strike a balance between utilizing the newest techologies and building upon the proven stability of long-standing frameworks and practices.</p>
            <p>Outside of the development world, I busy myself with gaming, psychology, and Japanese animation (with related media).</p>
          </div>
        </div>

        <div id="technologies">
          <h2>The more you know...</h2>
          <div className="middle_container">
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>Ruby</li>
              <li>Ruby on Rails</li>
              <li>Lua</li>
              <li>ReactJS</li>
              <li>BackboneJS</li>
              <li>OOP</li>
              <li>MVC</li>
              <li>TDD</li>
              <li>Native English</li>
              <li>Business-level Japanese</li>
            </ul>
          </div>
        </div>

        <span id="click_arrow" onClick={this.handleClick.bind(this)}>&nbsp;</span>
      </div>
    );
  }
}

export default About;

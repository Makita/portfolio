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
  }

  render() {
    var content;

    // Programming languages
    if(this.state.isClicked) {
      content = <React.Fragment>
        <h2>The more you know...</h2>
        <div className="middle_container">
          <ul>
            <li>HTML5, CSS3, JavaScript</li>
            <li>Ruby, Ruby on Rails</li>
            <li>Python</li>
            <li>C#</li>
            <li>Java</li>
            <li>Lua</li>
            <li>ReactJS, BackboneJS</li>
            <li>OOP, MVC, TDD</li>
          </ul>
        </div>
      </React.Fragment>
    // General introduction
    } else {
      content = <React.Fragment>
        <h2>So who is Justin anyway...</h2>
        <div className="middle_container">
          <p>I'm glad you asked!</p>
          <p>I am always looking to broaden my horizons and deepen my knowledge. My current interests reach out towards scalability and more teamwork. As they say: Teamwork makes the dream work! I value cohesive relationships and can assume both a leadership role and a more supportive one; I adapt to the situation.</p>
          <p>Did I mention I'm always trying to learn more? This portfolio itself marks my very first React-based project! (And to a lesser degree, my first attempt at a solid color background design.)</p>
          <p>As a note, the arrow at the bottom is clickable.</p>
        </div>
      </React.Fragment>
    }
    return (
      <div id="about">
        {content}
        <span onClick={this.handleClick.bind(this)}>&nbsp;</span>
      </div>
    );
  }
}

export default About;

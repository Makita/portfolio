import React, { Component } from 'react';

import linkedInLogo from './linked-in-square-button.svg';
import githubLogo from './github-big-logo.svg';
import avatarImage from './avatar-with-glasses-and-tie.svg';
import resumeRsc from './Resume.pdf';
import resumeJPRsc from './履歴書.pdf';
import photo from './photo.png';

class History extends Component {
  render() {
    return (
      <div id="history">
        <div>
          <img src={linkedInLogo} alt="LinkedIn" />
          <a href="https://www.linkedin.com/in/justin-choi-a8413955/">Justin Choi</a>
        </div>
        <div>
          <img src={githubLogo} alt="Github" />
          <a href="https://github.com/Makita">Makita (Work)</a>
        </div>
        <div>
          <img src={githubLogo} alt="Github" />
          <a href="https://github.com/Madobe">Madobe (Personal)</a>
        </div>
        <div>
          <img src={avatarImage} alt="Resume" />
          <a href={resumeRsc}>Resume (English)</a>
        </div>
        <div>
          <img src={avatarImage} alt="Resume" />
          <a href={resumeJPRsc}>Resume (Japanese)</a>
        </div>
        <img src={photo} alt="Photo" id="selfie" />
      </div>
    );
  }
}

export default History;

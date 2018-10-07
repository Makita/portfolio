import React, { Component } from 'react';

import linkedInLogo from './linked-in-square-button.svg';
import githubLogo from './github-big-logo.svg';
import avatarImage from './avatar-with-glasses-and-tie.svg';
import resumeRsc from './Resume.pdf';
import resumeJPRsc from './履歴書.pdf';
import photo from './photo.png';

class History extends Component {
  render() {
    let values = [
      {
        image: linkedInLogo,
        href: "https://www.linkedin.com/in/justin-choi-a8413955/",
        text: "Justin Choi",
      },
      {
        image: githubLogo,
        href: "https://github.com/Makita",
        text: "Makita",
      },
      {
        image: githubLogo,
        href: "https://github.com/Madobe",
        text: "Madobe",
      },
      {
        image: avatarImage,
        href: resumeRsc,
        text: "Resume (English)",
      },
      {
        image: avatarImage,
        href: resumeJPRsc,
        text: "Resume (Japanese)",
      },
    ];
    let links = values.map((hash) =>
      <div>
        <img src={hash.image} />
        <a href={hash.href}>{hash.text}</a>
      </div>
    );

    return (
      <div id="history">
        {links}
        <img src={photo} alt="Photo" id="selfie" />
      </div>
    );
  }
}

export default History;

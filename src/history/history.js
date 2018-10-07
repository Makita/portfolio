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
        alt: "LinkedIn Logo",
      },
      {
        image: githubLogo,
        href: "https://github.com/Makita",
        text: "Makita (Work)",
        alt: "Github Logo",
      },
      {
        image: githubLogo,
        href: "https://github.com/Madobe",
        text: "Madobe (Personal)",
        alt: "Github Logo",
      },
      {
        image: avatarImage,
        href: resumeRsc,
        text: "Resume (English)",
        alt: "Avatar Icon",
      },
      {
        image: avatarImage,
        href: resumeJPRsc,
        text: "Resume (Japanese)",
        alt: "Avatar Icon",
      },
    ];
    let links = values.map((hash) =>
      <div key={hash.text}>
        <img src={hash.image} alt={hash.alt} />
        <a href={hash.href}>{hash.text}</a>
      </div>
    );

    return (
      <div id="history">
        {links}
        <img src={photo} alt="Selfie" id="selfie" />
      </div>
    );
  }
}

export default History;

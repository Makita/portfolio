import React, { Component } from 'react';

import linkedInLogo from './linked-in-square-button.svg';
import githubLogo from './github-big-logo.svg';
import avatarImage from './avatar-with-glasses-and-tie.svg';
import resumeRsc from './Resume.pdf';
import resumeJPRsc from './履歴書.pdf';
import photo from './photo.png';

function LinksItem(props) {
  return <div key={props.text}>
    <img src={props.src} alt={props.alt} />
    <a href={props.href}>{props.text}</a>
  </div>
}

function LinksList(props) {
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
  return values.map((hash) =>
    <LinksItem text={hash.text} src={hash.image} alt={hash.alt} href={hash.href} />
  );
}

class History extends Component {
  render() {
    return (
      <div id="history">
        <LinksList />
        <img src={photo} alt="Selfie" id="selfie" />
      </div>
    );
  }
}

export default History;

import React from "react";

import style from "./timeline.scss";

const Timeline = () => (
  <div className={style.container}>
    <h1 className={style.header}>
      <span>What</span> have I done?
    </h1>
    <ul className={style.timeline}>
      <li class={style.event} data-date="1993">
        <h3>Birth</h3>
        <p>Hello world!</p>
      </li>
      <li class={style.event} data-date="2003">
        <h3>A Beginning</h3>
        <p>Decide to try making a website by hand.</p>
        <p>Start with plain HTML and CSS page. Move into JavaScript and PHP.</p>
      </li>
      <li class={style.event} data-date="2011">
        <h3>Kicking off Ruby on Rails</h3>
        <p>Meet Ken Li who introduces me to Ruby on Rails.</p>
        <p>Begin Otaku Kingdom project.</p>
      </li>
      <li className={style.event} data-date="2012">
        <h3>Getting into Gaming</h3>
        <p>
          Work over summer with Lost Mystic Games, an indie game developer.
          Unity3D using C#.
        </p>
      </li>
      <li className={style.event} data-date="2013">
        <h3>Start Work with Atlas Web Development</h3>
        <li>Start off with Soccer Recording App project. </li>
        <li>
          Begin work on{" "}
          <a href="http://www.theatlasphere.com/" target="_blank">
            The Atlasphere
          </a>{" "}
          as previous project finishes up.
        </li>
        <li>Begin work on Popper.</li>
      </li>
      <li className={style.event} data-date="2014">
        <h3>More Projects</h3>
        <p>Extra project for co-worker, Marshall Sontag.</p>
        <p>
          Begin working on{" "}
          <a href="https://www.smallbusinessadvocate.com/" target="_blank">
            Small Business Advocate
          </a>
          , beginning with Rails 2 to 4 upgrade.
        </p>
        <p>
          Develop Ruby on Rails version of site for One Stop Auto and Hitch Inc.
        </p>
      </li>
      <li className={style.event} data-date="2015">
        <h3>The Year of Bulk E-mail</h3>
        <p>
          Link{" "}
          <a href="https://www.clouddentistry.com/" target="_blank">
            Cloud Dentistry
          </a>{" "}
          and{" "}
          <a href="https://www.theribbonplace.com/" target="_blank">
            The Ribbon Place
          </a>{" "}
          to{" "}
          <a href="https://mailchimp.com/" target="_blank">
            Mail Chimp
          </a>{" "}
          for bulk e-mailing.
        </p>
      </li>
      <li className={style.event} data-date="2017">
        <h3>Back to Gaming</h3>
        <p>
          Receive commission to create custom character mods from{" "}
          <a href="https://steamcommunity.com/id/VENOM-B312">Sai</a>.
        </p>
      </li>
      <li className={style.event} data-date="2018">
        <h3>Skynet</h3>
        <p>Write a Google Spreadsheets management Discord bot in JavaScript.</p>
        <p>Begin that leap of faith into the front-end world.</p>
        <p>
          Rewrite{" "}
          <a href="https://one-stop-auto.glitch.me/" target="_blank">
            One Stop Auto and Hitch Inc.
          </a>{" "}
          page to use React. Convert to Single Page Application.
        </p>
        <p>Look for the next frontier!</p>
      </li>
    </ul>
  </div>
);

export default Timeline;

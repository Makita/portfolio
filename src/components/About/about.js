import React from "react";

import style from "./about.scss";

const About = () => (
  <div className={style.container}>
    <h1>
      ABOUT <span>ME</span>
    </h1>
    <blockquote>
      "Don't look back, keep on moving forward. When a guy keeps his gaze fixed
      in front of him, the world smiles on him."
      <footer>Jack Rakan</footer>
    </blockquote>
    <p className={style.text}>
      I believe that cheesy quotes really embody the ideal of humanity and show
      a wisdom that is all but lost as we compromise in life. As we experience
      more, words akin to "being realistic" become more prevalent. We begin to
      limit ourselves by relying on these phrases, neglecting to continue to
      pursue ideals by stopping short.
    </p>
    <p className={style.text}>
      I recognize this inner conflict and strive to always chase the best
      solution to the absolute limits of my ability. In my work, this means that
      while I will make concessions where necessary, I will never discard a
      better solution for so long as the possibility exists, despite any
      difficulty that may be associated with it.
    </p>
    <p className={style.text}>
      I would like to bring this ideal to life with a company that endeavors to
      surpass being simply "good" and grow evermore. I know I still have much
      more to grow and I would like to do it together. Please contact me if this
      is your company!
    </p>
  </div>
);

export default About;

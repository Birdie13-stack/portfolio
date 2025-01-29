import React from "react";
import html from "../assets/html.jpg";
import css from "../assets/css.jpg";
import js from "../assets/js.jpg";
import react from "../assets/react.jpg";
import git from "../assets/git.jpg";
import github from "../assets/github.jpg";
import tailwind from "../assets/tailwind.jpg";

function Technologies() {
  return (
    <div className="technologies">
      <h2 className="stack">My Tech Stack</h2>
      <p className="stack-text">Technologies I've been working with recently</p>

      <div className="tech">
        <img src={html} alt="HTML Logo" />
        <img src={css} alt="CSS Logo" />
        <img src={js} alt="Javascript Logo" />
        <img src={react} alt="React Logo" />
        <img src={git} alt="Git Logo" />
        <img src={github} alt="Github Logo" />
        <img src={tailwind} alt="" className="tailwind" />
      </div>

      <hr />
    </div>
  );
}

export default Technologies;

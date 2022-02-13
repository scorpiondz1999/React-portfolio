import React, { Component } from "react";

class Header extends Component {
  render() {
    const name = "Djamel Portfolio Project";
    const description="I am a web development and I use react js and node js to develop pages. This project is a resume template that can be used as the project home page or resume page";
    const project = "https://github.com/scorpiondz1999/React-portfolio";
    const github = "https://github.com/scorpiondz1999";

    return (
      <header id="home">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#resume">
                Resume
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#portfolio">
                Portfolio
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">{name}</h1>
              <h3>{description}.</h3>
            <hr />
           <ul className="social">
                <a href={project} target="_blank"  rel="noreferrer" className="button btn project-btn">
                  <i className="fa fa-book"></i>Project
                </a>
                <a href={github} target="_blank" rel="noreferrer" className="button btn github-btn">
                  <i className="fa fa-github"></i>Github
                </a>
              </ul>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;

import React, { Component } from "react";
import Zmage from "react-zmage";

let id = 0;
const projectstab = [
  {
    "title":"weather",
    "category":"current weather condition",
    "image":"01.jpg",
    "url":"https://github.com/scorpiondz1999/weather"
  },
  {
    "title":"MVC challenge",
    "category":"create an account and post blogs",
    "image":"02.jpg",
    "url":"https://github.com/scorpiondz1999/mvchallenge"
  },
  {
    "title":"NOSQL",
    "category":"creating an API for a social media network",
    "image":"03.jpg",
    "url":"https://github.com/scorpiondz1999/module18-challenge"
  },
  {
    "title":"Resume Website",
    "category":"A React based resume website template",
    "image":"04.jpg",
    "url":"https://github.com/scorpiondz1999/React-portfolio"
  }
]
class Portfolio extends Component {
  render() {
    const projects = projectstab.map(function (projects) {
      let projectImage = "images/portfolio/" + projects.image;

      return (
        <div key={id++} className="columns portfolio-item">
          <div className="item-wrap">
            <Zmage alt={projects.title} src={projectImage} />
            <div style={{ textAlign: "center" }}>
            <a href={projects.url} target="_blank"  rel="noreferrer">{projects.title}</a>
              </div>
          </div>
        </div>
      );
    });

    return (
      <section id="portfolio">
       <div className="row">
            <div className="twelve columns collapsed">
              <h1>Check Out Some of My Works.</h1>

              <div
                id="portfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
              >
                {projects}
              </div>
            </div>
          </div>
      </section>
    );
  }
}

export default Portfolio;

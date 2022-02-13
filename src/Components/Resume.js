import React, { Component } from "react";

const skillstab = [
  {
    "name":"Node JS",
    "level":"90%"
  },
  {
    "name":"JavaScript",
    "level":"95%"
  },
  {
    "name":"ReactJs",
    "level":"50%"
  },
  {
    "name":"CSS",
    "level":"90%"
  },
  {
    "name":"HTML",
    "level":"100%"
  },
  {
    "name":"SQL",
    "level":"70%"
  },
  {
    "name":"NoSQL",
    "level":"40%"
  }
]

class Resume extends Component {
  getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    const skills = skillstab.map((skills) => {
      const backgroundColor = this.getRandomColor();
      const className = "bar-expand " + skills.name.toLowerCase();
      const width = skills.level;

      return (
        <li key={skills.name}>
          <span style={{ width, backgroundColor }} className={className}></span>
          <em>{skills.name}</em>
        </li>
      );
    });

    return (
      <section id="resume">
         <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Education</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                <div>
                  <h3>KU University</h3>
                  <p className="info">
                  Engineer in Web development <span>&bull;</span>
                    <em className="date">March 2022</em>
                  </p>
                  <p>I'm preparing a high</p>
                </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="row skill">
            <div className="three columns header-col">
              <h1>
                <span>Skills</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="bars">
                <ul className="skills">{skills}</ul>
              </div>
            </div>
          </div>
      </section>
    );
  }
}

export default Resume;

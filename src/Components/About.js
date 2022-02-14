import React, { Component } from "react";
class About extends Component {
  render() {
    const profilepic = "./images/profilepic.jpg";
    return (
      <section id="about">
        <div className="row">
            <div className="three columns">
              <img
                className="profile-pic"
                src={profilepic}
                alt="Djamel Profile Pic"
              />
            </div>
            <div className="nine columns main-col">
              <h2>About Me</h2>

              <p>I’m a junior full-stack developer, creative coder and self-proclaimed
                                        designer who has a passion for the front-end spectrum,also have a great skills and understanding of back-end.</p>
                                        <p>
                                I love creating, whether those things are web applications, CodePen creations,
                                mobile apps, podcasts, or tinkering around in Photoshop or Illustrator.
                        </p>                      
              
            </div>
          </div>
      </section>
    );
  }
}

export default About;

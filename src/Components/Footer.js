import React, { Component } from "react";

const socialtab = [
  {
    "name":"facebook",
    "url":"https://www.facebook.com",
    "className":"fa fa-facebook"
  },
  {
    "name":"twitter",
    "url":"http://www.twitter.com",
    "className":"fa fa-twitter"
  },
  {
    "name":"linkedin",
    "url":"https://www.linkedin.com",
    "className":"fa fa-linkedin"
  },
  {
    "name":"instagram",
    "url":"http://www.instagram.com",
    "className":"fa fa-instagram"
  },
  {
    "name":"github",
    "url":"https://github.com/scorpiondz1999",
    "className":"fa fa-github"
  }
]

class Footer extends Component {
  render() {
    const networks = socialtab.map(function (network) {
      return (
        <li key={network.name}>
          <a href={network.url}>
            <i className={network.className}></i>
          </a>
        </li>
      );
    });

    return (
      <footer>
        <div className="row">
          <div className="twelve columns">
              <ul className="social-links">{networks}</ul>

              <ul className="copyright">
                <li>&copy; Copyright 2022 Dj Ram</li>                
              </ul>
            </div>

          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open"></i>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;

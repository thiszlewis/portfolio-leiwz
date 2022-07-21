import React, { Component } from "react";
import ReactGA from "react-ga";
import $ from "jquery";

class About extends Component {
  showMap() {
    ReactGA.ga("send", "pageview", "/viewedMap");
    window.location.href = "/#map";
  }

  render() {
    const seperate = window.innerWidth >= 376 ? "" : <br />;
    return (
      <section className="resume-section p-3 p-lg-5 d-flex d-column" id="about">
        <div className="container-fluid">
          <div className="my-auto">
            <br />
            <h1 className="mb-0">
            Lewis {seperate}
              <span className="text-primary">Iwhere</span>
            </h1>
            <h2 className="proffession">
              {$(window).width() <= 375 ? (
                <div>
                  frontend 
                  <div className="developer">Developer</div>
                </div>
              ) : (
                "frontend Developer"
              )}
            </h2>
            <div className="subheading mb-5">
              <a className="map-link">
                152 Holbourne avenue
              </a>
              <span className="space-out">·</span>
              <a className="map-link" >
                TORONTO, CA   M4C 2R6
              </a>
              <span className="space-out"></span>
              <span className="space-out">.</span>
              <a href="mailto:thiszlewis@gmail.com">thiszlewis@gmail.com</a>
            </div>
            <p className="mb-5">
              Passionate Software Engineer with years of verifiable success in
              delivering appropriate technology solutions for web and mobile
              products. Comprehensive knowledge of platform development,
              enterprise architecture, agile methodologies, cloud services, and
              web-based applications.
            </p>
            <ul className="list-inline list-social-icons mb-0">
              <li className="list-inline-item">
                <a href="/">
                  <span className="fa-stack fa-lg">
                    <i className="fa fa-circle fa-stack-2x"></i>
                    <i className="fa fa-home fa-stack-1x fa-inverse"></i>
                  </span>
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="https://medium.com/@jesseokeya"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="fa-stack fa-lg">
                    <i className="fa fa-circle fa-stack-2x"></i>
                    <i className="fa fa-file-lines"></i>
                  </span>
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="https://www.linkedin.com/in/jesse-okeya-45a38510a/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="fa-stack fa-lg">
                    <i className="fa fa-circle fa-stack-2x"></i>
                    <i className="fa fa-linkedin fa-stack-1x fa-inverse"></i>
                  </span>
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="https://github.com/thiszlewis/React-portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="fa-stack fa-lg">
                    <i className="fa fa-circle fa-stack-2x"></i>
                    <i className="fa fa-github fa-stack-1x fa-inverse"></i>
                  </span>
                </a>
              </li>
              {/* <li className="list-inline-item">
                <a href="/pdf/resume.pdf" target="_blank">
                  <span className="fa-stack fa-lg">
                    <i className="fa fa-circle fa-stack-2x"></i>
                    <i className="fa fa-folder fa-stack-1x fa-inverse"></i>
                  </span>
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export { About };

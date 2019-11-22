import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import img1 from "./images/2.png";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <header>
          <div
            className="container-fluid sticky"
            style={{ background: "white", width: "100%" }}
          >
            <div className="container">
              <div className="row">
                <div className="col-sm-4 h-logowidth">
                  <img
                    src={img1}
                    className="headlogo"
                    style={{ width: "100%" }}
                  />
                </div>

                <div
                  className="topnav col-sm-8 text-center text-secondary headz h-headz"
                  id="myTopnav"
                >
                  <a className="h-home" href="/">
                    HOME
                  </a>
                  <a className="h-abpc" href="/about">
                    ABOUT
                  </a>
                  <a className="h-abpc" href="/services">
                    SERVICES
                  </a>
                  <a className="h-abpc" href="/projects">
                    PROJECTS
                  </a>
                  <a className="h-contact" href="/contacts">
                    CONTACT
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>
      </React.Fragment>
    );
  }
}

export default Navbar;

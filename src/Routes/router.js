import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./../Container/Home/home";
import About from "./../Container/Home/about";
import Services from "./../Container/Home/services";
import Contact from "./../Container/Home/contacts";
import Project from "./../Container/Home/projects";

class Routes extends Component {
  state = {};
  render() {
    return (
      <div>
        <Router>
          <div>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/services">
                <Services />
              </Route>
              <Route exact path="/projects">
                <Project />
              </Route>
              <Route exact path="/contacts">
                <Contact />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default Routes;

import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Navbar from "./navbar";
import Home from "./home";
import About from "./about";
import Services from "./services";
import Project from "./projects";
import Contact from "./contacts";

class App extends Component {
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

export default App;

import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Apps.css";
import { Signup } from "./signUp";

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  render() {
    return (
      <div className="bgcolor">
        <div className="">
          <div className="row">
            <div className="col-md-9">
              <h2>Dashboard</h2>
            </div>
            <div className="col-md-3">
              <form>
                <div className="form-group" style={{ paddingTop: 20 }}>
                  <label>Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                  />
                </div>

                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                  />
                </div>

                <div className="form-group">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck1"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheck1"
                    >
                      Remember me
                    </label>
                  </div>
                </div>

                <button className="btn btn-primary btn-block">
                  <a href="/button">Submit </a>
                </button>

                <p className="forgot-password text-right padbo">
                  Forgot <a href="#">password?</a>
                </p>
                <a href="/signUp">
                  <h6>don't have account? Sign Up</h6>
                </a>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Signin;

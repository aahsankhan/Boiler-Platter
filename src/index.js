import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Navbar from "./Component/Navbar/navbar";
import Home from "./Container/Home/home";
import Signin from "./Container/SignIn/signin";
import Signup from "./Container/SignUp/signup";
import About from "./Container/Home/about";
import Project from "./Container/Home/projects";
import Routes from "./Routes/router";

ReactDOM.render(<Routes />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

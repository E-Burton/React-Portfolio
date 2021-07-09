import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Route, Switch } from "react-router-dom";
import {HashRouter as Router } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import ResumePage from "views/ResumePage/ResumePage.js";

import ProfilePage from "views/ProfilePage/ProfilePage.js";
import ContactPage from "views/ContactPage/ContactPage.js";
import FrontEnd from "views/ProjectsPage/Sections/FrontEnd.js";
import BudgetTracker from "views/ProjectsPage/Sections/BudgetTracker.js";
import EmployeeDirectory from "views/ProjectsPage/Sections/EmployeeDirectory.js";
import EmployeeTracker from "views/ProjectsPage/Sections/EmployeeTracker.js";
import JavaScriptQuiz from "views/ProjectsPage/Sections/JavaScriptQuiz.js";
import NoteTaker from "views/ProjectsPage/Sections/NoteTaker.js";
import PasswordGenerator from "views/ProjectsPage/Sections/PasswordGenerator.js";
import READMEGenerator from "views/ProjectsPage/Sections/READMEGenerator.js";
import WeatherDashboard from "views/ProjectsPage/Sections/WeatherDashboard.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/landing-page" component={LandingPage} />
      <Route path="/components" component={Components} />
      <Route path="/login-page" component={LoginPage} />
      <Route path="/front-end" component={FrontEnd} />
      <Route path="/budget-tracker" component={BudgetTracker} />
      {/* <Route path="/employee-directory" component={EmployeeDirectory} /> */}
      <Route path="/employee-tracker" component={EmployeeTracker} />
      {/* <Route path="/javascript-quiz" component={JavaScriptQuiz} /> */}
      <Route path="/note-taker" component={NoteTaker} />
      {/* <Route path="/password-generator" component={PasswordGenerator} /> */}
      <Route path="/readme-generator" component={READMEGenerator} />
      {/* <Route path="/weather-dashboard" component={WeatherDashboard} /> */}
      <Route path="/contact-page" component={ContactPage} />
      <Route path="/resume-page" component={ResumePage} />
      <Route exact path="/" component={ProfilePage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);

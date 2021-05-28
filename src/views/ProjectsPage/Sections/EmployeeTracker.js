import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import ProjectDetails from "views/ProjectsPage/Components/ProjectDetails.js";

import project6 from "assets/img/projects/employee-tracker-demo.gif";

import styles from "assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);

export default function EmployeeTracker(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div>
      <Header
        color="transparent"
        brand="Edwina Burton"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white"
        }}
        {...rest}
      />
      <Parallax small filter image={require("assets/img/landing-bg.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <ProjectDetails 
                title="MySQL Employee Tracker"
                image={project6}
                appDemo="https://drive.google.com/file/d/1QF0uVy49M06UWILa5vYRsnfwy0gYv-YD/view?usp=sharing"
                repo="https://github.com/E-Burton/MySQL-Employee-Tracker"
                description="Employee Tracker Content Management System (CMS), that allows user to view and add employees, departments, and roles."
                technologies="JavaScript, NodeJS, InquirerJS, MySQL, NPM"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
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

import project4 from "assets/img/projects/readme-generator.gif";

import styles from "assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);

export default function READMEGenerator(props) {
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
                title="README Generator"
                image={project4}
                appDemo="https://drive.google.com/file/d/1A8yzQdeZR5FBTlncz1T9VboOQKDs9bpT/view?usp=sharing"
                repo="https://github.com/E-Burton/Professional-README-File-Generator-Node.JS"
                description="A command-line application that dynamically generates a professional README.md file from a user's input."
                technologies="JavaScript, NodeJS, InquirerJS"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
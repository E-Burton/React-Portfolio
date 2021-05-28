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

import project7 from "assets/img/projects/pwa-budget-tracker.png";


import styles from "assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);

export default function BudgetTracker(props) {
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
                title="MongDB PWA Online and Offline Budget Tracker"
                image={project7}
                appDemo="https://pwa-budget-tracker-eb.herokuapp.com/"
                repo="https://github.com/E-Burton/PWA-Offline-Online-Budget-Tracker"
                description="Added backend functionality to existing Budget Tracker application to allow for offline access and functionality."
                technologies="JavaScript, HTML, CSS, Bootstrap, NodeJS, ExpressJS, MongoDB, NPM, Heroku"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
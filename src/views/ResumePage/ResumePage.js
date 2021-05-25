import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js"
import Parallax from "components/Parallax/Parallax.js";

import profile from "assets/img/faces/edwina.JPG";

import resume from "assets/documents/Resume.pdf";

import styles from "assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const resumestyle = {
    height: "900px",
    width: "100%",
    // padding-bottom: "56.25%", 
    overflow: "hidden", 
    position: "relative"
  };
  const iframestyle = {
    width: "100%",
    height: "100%",
    position: "abolute",
    top: 0,
    left: 0
  };
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
          <div className={classes.container} margin={"0px auto"}>
            <GridContainer justify="center">
                <GridItem xs={6} sm={6} md={6}>
                  <div className={classes.profile}>
                    <img src={profile} alt="..." className={imageClasses} />
                    {/* <a href={resume} target="_blank">View Resume</a> */}
                  </div>
                </GridItem>
                <GridItem xs={12} style={resumestyle}>
                  <div style={resumestyle}>
                    <iframe
                      alt="Resume"
                      src={resume}
                      frameboarder="0"
                      style={iframestyle}
                    />
                  </div>
                </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

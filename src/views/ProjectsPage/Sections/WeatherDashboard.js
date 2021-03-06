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

import project3 from "assets/img/projects/weather-dashboard-demo.gif";

import styles from "assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);

export default function WeatherDashboard(props) {
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
                title="Weather Dashboard"
                image={project3}
                appDemo={null}
                repo="https://github.com/E-Burton/Weather-Dashboard-Server-Side-APIs"
                description="Dashboard that runs in the broswer and retreives current weather outlook (including Wind Speed and UV Index) and the 5-day forecast for multiple cities."
                technologies="JavaScript, HTML, CSS, Bootstrap, jQuery, OpenWeather API"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
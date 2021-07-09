import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";

//@material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Schedule from "@material-ui/icons/Schedule";
import LockIcon from '@material-ui/icons/Lock';
import CloudIcon from '@material-ui/icons/Cloud';
import FolderSharedIcon from '@material-ui/icons/FolderShared';

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import ProjectDetails from "views/ProjectsPage/Components/ProjectDetails.js";

import project1 from "assets/img/projects/password-generator-demo.png";
import project2 from "assets/img/projects/quiz-demo.gif";
import project3 from "assets/img/projects/weather-dashboard-demo.gif";
import project8 from "assets/img/projects/react-employee-directory.png";

import styles from "assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);

export default function PasswordGenerator(props) {
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
            <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={6}>
                    <div className={classes.profile}>
                        <div className={classes.name}>
                            <h3 className={classes.title} style={{color: "white"}}>FRONT-END PROJECTS</h3>
                        </div>
                    </div>
                </GridItem>
            </GridContainer>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={12} className={classes.navWrapper}>
              <NavPills
                alignCenter
                color="primary"
                // horizontal={{
                //   tabsGrid: { xs: 12, sm: 1, md: 1 },
                //   contentGrid: { xs: 12, sm: 11, md: 11 }
                // }}
                tabs={[
                  {
                    tabButton: "Password Generator",
                    tabIcon: LockIcon,
                    tabContent: (
                      <span>
                        <ProjectDetails 
                            title="Password Generator"
                            image={project1}
                            appDemo="https://e-burton.github.io/Password-Generator-JavaScript/"
                            repo="https://github.com/E-Burton/Password-Generator-JavaScript"
                            description="JavaScript powered application that generates a random password based on user criteria selected."
                            technologies="HTML, CSS, JavaScript"
                        />
                      </span>
                    )
                  },
                  {
                    tabButton: "JavaScript Quiz",
                    tabIcon: Schedule,
                    tabContent: (
                      <span>
                        <ProjectDetails 
                            title="JavaScript Quiz"
                            image={project2}
                            appDemo="https://e-burton.github.io/Code-Quiz-Web-APIs/"
                            repo="https://github.com/E-Burton/Code-Quiz-Web-API"
                            description="A responsive multiple-choice JavaScript timed coding quiz which stores user high scores."
                            technologies="JavaScript, HTML, CSS, Bootstrap"
                        />
                      </span>
                    )
                  },
                  {
                    tabButton: "Weather Dashboard",
                    tabIcon: CloudIcon,
                    tabContent: (
                      <span>
                        <ProjectDetails 
                            title="Weather Dashboard"
                            image={project3}
                            appDemo="https://e-burton.github.io/Weather-Dashboard-Server-Side-APIs/"
                            repo="https://github.com/E-Burton/Weather-Dashboard-Server-Side-APIs"
                            description="Dashboard that runs in the broswer and retreives current weather outlook (including Wind Speed and UV Index) and the 5-day forecast for multiple cities."
                            technologies="JavaScript, HTML, CSS, Bootstrap, jQuery, OpenWeather API"
                        />
                      </span>
                    )
                  },
                  {
                    tabButton: "Employee Directory",
                    tabIcon: FolderSharedIcon,
                    tabContent: (
                      <span>
                        <ProjectDetails 
                            title="React Employee Directory"
                            image={project8}
                            appDemo="https://e-burton.github.io/React-Employee-Directory/"
                            repo="https://github.com/E-Burton/React-Employee-Directory"
                            description="Used React and Random User API to build an employee directory that allows filtering or sorting by category."
                            technologies="JavaScript, HTML, CSS, React, Material-UI, NPM"
                        />
                      </span>
                    )
                  }
                ]}
              />
            </GridItem>
          </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

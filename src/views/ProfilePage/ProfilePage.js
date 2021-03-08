import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";

import profile from "assets/img/faces/edwina.JPG";

import studio1 from "assets/img/examples/studio-1.jpg";
import studio3 from "assets/img/examples/studio-3.jpg";
import work1 from "assets/img/examples/olu-eletu.jpg";
import work2 from "assets/img/examples/clem-onojeghuo.jpg";
import work4 from "assets/img/examples/mariya-georgieva.jpg";

import project1 from "assets/img/projects/password-generator-demo.png";
import project2 from "assets/img/projects/quiz-demo.gif";
import project3 from "assets/img/projects/weather-dashboard-demo.gif";
import project4 from "assets/img/projects/readme-generator.gif";
import project5 from "assets/img/projects/note-taker-demo.gif";
import project6 from "assets/img/projects/employee-tracker-demo.gif";
import project7 from "assets/img/projects/pwa-budget-tracker.png";
import project8 from "assets/img/projects/react-employee-directory.png";

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
      <Parallax small filter image={require("assets/img/profile-bg.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Edwina Burton</h3>
                    <h6>WEB DEVELOPER</h6>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-github"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-linkedin"} />
                    </Button>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p>
              Hello! I'm a Colorado Native who loves fitness competition shows (like Titan Games and American Ninja Warrior) and am obsessed with Tetris. In my free time I enjoy spending time with my partner, going on walks and cycling together, and taking the dogs to the dog park. I value getting things done correctly and efficiently, and believe that consistent learning and growth (no matter how big or small) is key in achieving any aspiration. Keeping this in mind, I view any challenge as an opportunity to hone and improve my skills.

              While purusing my undergraduate degree I was exposed to programming. Initially I didn't like it, but later found appreciation in the puzzle and problem solving features, and the joy that came with finally creating a project that was functioning as intended. After having spent a few years as a forecasting analyst, I realized that I needed to pursue a field that involved more creativity and allowed for constant learning, which is why I made the decision to pursuse the University of Denver's Full Stack Coding Bootcamp. The experience thus far has been great, and I'm excited for what's to come!{" "}
              </p>
            </div>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={12} className={classes.navWrapper}>
                <NavPills
                  alignCenter
                  color="primary"
                  tabs={[
                    {
                      tabButton: "JavaScript & APIs",
                      tabIcon: Camera,
                      tabContent: (
                        <React.Fragment>
                          <GridContainer justify="center"> 
                            <GridItem xs={6} sm={6} md={6}>
                              <img
                                alt="Password Generator"
                                src={project1}
                                className={navImageClasses}
                              />
                            </GridItem>
                          </GridContainer>

                          <GridContainer justify="center">
                            <GridItem xs={6} sm={6} md={6}>
                              <img
                                alt="JavaScript Quiz"
                                src={project2}
                                className={navImageClasses}
                              />
                            </GridItem>
                            <GridItem xs={6} sm={6} md={6}>
                              <img
                                alt="Weather Dashboard"
                                src={project3}
                                className={navImageClasses}
                              />
                            </GridItem>
                          </GridContainer>
                        </React.Fragment>
                      
                      )
                    },
                    {
                      tabButton: "Node, Express & MySQL",
                      tabIcon: Palette,
                      tabContent: (
                        <React.Fragment>
                          <GridContainer justify="center"> 
                            <GridItem xs={6} sm={6} md={7}>
                              <img
                                alt="Note Taker"
                                src={project5}
                                className={navImageClasses}
                              />
                            </GridItem>
                          </GridContainer>

                          <GridContainer justify="center">
                            <GridItem xs={6} sm={6} md={6}>
                              <img
                                alt="README Generator"
                                src={project4}
                                className={navImageClasses}
                              />
                            </GridItem>
                            <GridItem xs={6} sm={6} md={6}>
                              <img
                                alt="Employee Tracker"
                                src={project6}
                                className={navImageClasses}
                              />
                            </GridItem>
                        </GridContainer>
                      </React.Fragment>
                      )
                    },
                    {
                      tabButton: "MongoDB & React",
                      tabIcon: Favorite,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={6}>
                            <img
                              alt="Budget Tracker"
                              src={project7}
                              className={navImageClasses}
                            />

                          </GridItem>
                          <GridItem xs={12} sm={12} md={6}>
                            <img
                              alt="Employee Directory"
                              src={project8}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
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

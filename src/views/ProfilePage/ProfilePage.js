import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { jssPreset, makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import ComputerIcon from '@material-ui/icons/Computer';
import StorageIcon from '@material-ui/icons/Storage';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import BuildIcon from '@material-ui/icons/Build';

// DevIcons
import DevIcon from 'devicon-react-svg';
import html5 from "assets/devicons/html5/html5-plain-wordmark.svg";
import css3 from "assets/devicons/css3/css3-plain-wordmark.svg";
import js from "assets/devicons/javascript/javascript-original.svg";
import mongo from "assets/devicons/mongodb/mongodb-plain-wordmark.svg"
import mysql from "assets/devicons/mysql/mysql-original-wordmark.svg";
import bootstrap from "assets/devicons/bootstrap/bootstrap-plain-wordmark.svg";
import express from "assets/devicons/express/express-original-wordmark.svg";
import handlebars from "assets/devicons/handlebars/handlebars-original-wordmark.svg";
import jquery from "assets/devicons/jquery/jquery-plain-wordmark.svg";
import material from "assets/devicons/materialui/materialui-original.svg"
import node from "assets/devicons/nodejs/nodejs-plain-wordmark.svg";
import REACT from "assets/devicons/react/react-original-wordmark.svg";
import git from "assets/devicons/github/github-original-wordmark.svg";
import heroku from "assets/devicons/heroku/heroku-original-wordmark.svg";
import npm from "assets/devicons/npm/npm-original-wordmark.svg";
import vscode from "assets/devicons/visualstudio/visualstudio-plain-wordmark.svg";

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
import styles from "assets/jss/material-kit-react/views/profilePage.js";
import { GitHub } from "@material-ui/icons";
import { grayColor } from "assets/jss/material-kit-react";

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
      <Parallax small filter image={require("assets/img/landing-bg.jpg")} />
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
                    <h5 style={{ fontWeight: "bold" }}>WEB DEVELOPER</h5>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p style={{ color: "#212121", fontSize: 16 }} >
              Hello! I'm a Colorado Native with a strong background in Mathematics, who loves fitness competition shows (like Titan Games and American Ninja Warrior), is obsessed with Tetris and enjoys getting out and active in nature. In March 2021, I completed the University of Denver's Coding Certification Bootcamp, where I learned key skills for responsive front end and back end development. I value getting things done correctly and efficiently, and believe that consistent learning and growth (no matter how big or small) is key in achieving any aspiration. Keeping this in mind, I view any challenge as an opportunity to expand my perspective and enhance my skills.
              <br/>
              <br/>
               After having spent several years as a forecasting analyst, I realized that I needed to pursue a field that involved more creativity and allowed for constant learning. While it may be overwhelming to think about how many technologies exist, I love the fact that I have an abundance of resources to learn anything I wish, in order to further develop the skills I've gained and be a value asset for any project.{" "}
              </p>
              <h4 className={classes.title} style={{ borderBottom: "3px solid #3C4858", width: "85%" }}> SKILLS </h4>
            </div>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={12} className={classes.navWrapper}>
                <NavPills
                  alignCenter
                  color="primary"
                  tabs={[
                    {
                      tabButton: "Technologies",
                      tabIcon: ComputerIcon,
                      tabContent: (
                        <React.Fragment>
                          <GridContainer justify="center"> 
                            <GridItem xs={2} sm={2} md={2}>
                              <img
                                alt="HTML5"
                                src={html5}
                                className={navImageClasses}
                              />
                            </GridItem>
                            <GridItem xs={2} sm={2} md={2}>
                              <img
                                alt="CSS3"
                                src={css3}
                                className={navImageClasses}
                              />
                            </GridItem>
                            <GridItem xs={2} sm={2} md={2}>
                              <img
                                alt="JavaScript"
                                src={js}
                                // className={navImageClasses}
                                style={{ borderRadius: "25%"}}
                              />
                            </GridItem>
                          </GridContainer>
                        </React.Fragment>
                      )
                    },
                    {
                      tabButton: "Databases",
                      tabIcon: StorageIcon,
                      tabContent: (
                        <React.Fragment>
                          <GridContainer justify="center"> 
                            <GridItem xs={2} sm={2} md={2}>
                                <img
                                  alt="MongoDB"
                                  src={mongo}
                                  className={navImageClasses}
                                />
                              </GridItem>
                              <GridItem xs={2} sm={2} md={2}>
                                <img
                                  alt="MySQL"
                                  src={mysql}
                                  className={navImageClasses}
                                />
                              </GridItem>
                          </GridContainer>
                      </React.Fragment>
                      )
                    },
                    {
                      tabButton: "Libraries & Frameworks",
                      tabIcon: MenuBookIcon,
                      tabContent: (
                        <React.Fragment>
                          <GridContainer justify="center"> 
                            <GridItem xs={2} sm={2} md={2}>
                              <img
                                alt="Bootstrap"
                                src={bootstrap}
                                className={navImageClasses}
                              />
                            </GridItem>
                            <GridItem xs={2} sm={2} md={2}>
                              <img
                                alt="ExpresJS"
                                src={express}
                                className={navImageClasses}
                              />
                            </GridItem>
                            <GridItem xs={2} sm={2} md={2}>
                              <img
                                alt="Handlebars"
                                src={handlebars}
                                className={navImageClasses}
                              />
                            </GridItem>
                            <GridItem xs={2} sm={2} md={2}>
                              <img
                                alt="jQuery"
                                src={jquery}
                                className={navImageClasses}
                              />
                            </GridItem>
                          </GridContainer>
                          <GridContainer justify="center"> 
                            <GridItem xs={2} sm={2} md={2}>
                              <img
                                alt="Materialize"
                                src={material}
                                className={navImageClasses}
                              />
                            </GridItem>
                            <GridItem xs={2} sm={2} md={2}>
                              <img
                                alt="NodeJS"
                                src={node}
                                className={navImageClasses}
                              />
                            </GridItem>
                            <GridItem xs={2} sm={2} md={2}>
                              <img
                                alt="React"
                                src={REACT}
                                className={navImageClasses}
                              />
                            </GridItem>
                          </GridContainer>
                        </React.Fragment>
                      )
                    },
                    {
                      tabButton: "Tools",
                      tabIcon: BuildIcon,
                      tabContent: (
                        <React.Fragment>
                          <GridContainer justify="center"> 
                            <GridItem xs={2} sm={2} md={2}>
                              <img
                                alt="GitHub"
                                src={git}
                                className={navImageClasses}
                              />
                            </GridItem>
                            <GridItem xs={2} sm={2} md={2}>
                              <img
                                alt="Heroku"
                                src={heroku}
                                className={navImageClasses}
                              />
                            </GridItem>
                            <GridItem xs={2} sm={2} md={2}>
                              <img
                                alt="NPM"
                                src={npm}
                                className={navImageClasses}
                              />
                            </GridItem>
                            <GridItem xs={2} sm={2} md={2}>
                              <img
                                alt="Visual Studio Code"
                                src={vscode}
                                className={navImageClasses}
                              />
                            </GridItem>
                          </GridContainer>
                        </React.Fragment>
                      )
                    },
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

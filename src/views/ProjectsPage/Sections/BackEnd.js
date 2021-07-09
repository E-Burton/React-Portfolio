import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";

//@material-ui/icons
import ChromeReaderModeIcon from '@material-ui/icons/ChromeReaderMode';
import NotesIcon from '@material-ui/icons/Notes';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import ProjectDetails from "views/ProjectsPage/Components/ProjectDetails.js";

import project4 from "assets/img/projects/readme-generator.gif";
import project5 from "assets/img/projects/note-taker-demo.gif";
import project6 from "assets/img/projects/employee-tracker-demo.gif";
import project7 from "assets/img/projects/pwa-budget-tracker.png";

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
                            <h3 className={classes.title} style={{color: "white"}}>BACK-END PROJECTS</h3>
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
                    tabButton: "README Generator",
                    tabIcon: ChromeReaderModeIcon,
                    tabContent: (
                      <span>
                        <ProjectDetails 
                            title="README Generator"
                            image={project4}
                            appDemo="https://drive.google.com/file/d/1A8yzQdeZR5FBTlncz1T9VboOQKDs9bpT/view?usp=sharing"
                            repo="https://github.com/E-Burton/Professional-README-File-Generator-Node.JS"
                            description="A command-line application that dynamically generates a professional README.md file from a user's input."
                            technologies="JavaScript, NodeJS, InquirerJS"
                        />
                      </span>
                    )
                  },
                  {
                    tabButton: "Note Taker",
                    tabIcon: NotesIcon,
                    tabContent: (
                      <span>
                        <ProjectDetails 
                            title="Express Note Taker"
                            image={project5}
                            appDemo="https://express-js-note-taker-e.herokuapp.com/"
                            repo="https://github.com/E-Burton/Express.js-Note-Taker"
                            description="Modified back-end code of application to write, save, and retrieve note data from a JSON file."
                            technologies="JavaScript, HTML, CSS, Express, NPM, Heroku"
                        />
                      </span>
                    )
                  },
                  {
                    tabButton: "Employee Tracker",
                    tabIcon: GroupAddIcon,
                    tabContent: (
                      <span>
                        <ProjectDetails 
                            title="MySQL Employee Tracker"
                            image={project6}
                            appDemo="https://drive.google.com/file/d/1QF0uVy49M06UWILa5vYRsnfwy0gYv-YD/view?usp=sharing"
                            repo="https://github.com/E-Burton/MySQL-Employee-Tracker"
                            description="Employee Tracker Content Management System (CMS), that allows user to view and add employees, departments, and roles."
                            technologies="JavaScript, NodeJS, InquirerJS, MySQL, NPM"
                        />
                      </span>
                    )
                  },
                  {
                    tabButton: "Budget Tracker",
                    tabIcon: AttachMoneyIcon,
                    tabContent: (
                      <span>
                        <ProjectDetails 
                            title="MongDB PWA Online and Offline Budget Tracker"
                            image={project7}
                            appDemo="https://pwa-budget-tracker-eb.herokuapp.com/"
                            repo="https://github.com/E-Burton/PWA-Offline-Online-Budget-Tracker"
                            description="Added backend functionality to existing Budget Tracker application to allow for offline access and functionality."
                            technologies="JavaScript, HTML, CSS, Bootstrap, NodeJS, ExpressJS, MongoDB, NPM, Heroku"
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

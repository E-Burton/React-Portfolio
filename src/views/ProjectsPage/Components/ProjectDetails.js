import React from 'react'; // Import the Component component from React
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/profilePage.js";
import { HTML5_FMT } from 'moment';

const useStyles = makeStyles(styles);

export default function ProjectDetails({title, image, deployedApp, repo, description}) {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div className="project">
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={6}>
          <div className={classes.profile}>
            <div>
              <br></br>
              <br></br>
              <br></br>
            </div>
            <div className={classes.name}>
              <h3 className={classes.title}>{title}</h3>
              <GridContainer justify="center">
                <GridItem xs={6} sm={6} md={4}>
                  <a target="_blank" href={deployedApp} rel="noreferrer">
                      <h6>DEPLOYED APPLICATION</h6>
                  </a>
                </GridItem>
                <GridItem xs={6} sm={6} md={4}>
                  <a target="_blank" href={repo} rel="noreferrer">
                    <h6>PROJECT REPOSITORY</h6>
                  </a>
                </GridItem>
              </GridContainer>
            </div>
          </div>
        </GridItem>
      </GridContainer>

      <div className={classes.description}>
        <p>
        {description}{" "}
        </p>
      </div>

      <GridContainer justify="center"> 
        <GridItem xs={12} sm={12} md={8}>
          <img
            alt={title}
            src={image}
            className={navImageClasses}
          />
        </GridItem>
      </GridContainer>
    </div>
  );
}
 
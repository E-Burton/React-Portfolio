import React from 'react'; // Import the Component component from React
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";


import styles from "assets/jss/material-kit-react/views/profilePage.js";
import { HTML5_FMT } from 'moment';

const useStyles = makeStyles(styles);

export default function ProjectDetails({title, image, appDemo, repo, description, technologies}) {

  let button;

  if (appDemo !== null) {
    button = (
      <GridItem xs={4} justifyContent="right">
        <Button target="_blank" href={appDemo} color="transparent">
          <p style={{color: "#212121", fontSize: 14}} > APPLICATION DEMO{" "}</p>
        </Button>
      </GridItem>)
  }

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

                <div className={classes.description}>
                  <p style={{color: "#212121", fontSize: 17}}>
                    {description}{" "}
                  </p>
                  <p style={{color: "#212121", fontSize: 17}}>
                    <b> <u> Technologies:</u></b> {technologies}{" "}
                  </p>
                </div>

                {button}

                {/* <GridItem xs={5} justifyContent="right">
                  <Button target={target} href={deployedApp} color="transparent">
                      <p style={{color: "#212121", fontSize: 14}} > DEPLOYED APPLICATION{" "}</p>
                  </Button>
                </GridItem> */}
                <GridItem  xs={5} justifyContent="left">
                  <Button target="_blank" href={repo}>
                    <p style={{color: "#212121", fontSize: 14}} >PROJECT REPOSITORY</p>
                  </Button>
                </GridItem>
              </GridContainer>
            </div>
          </div>
        </GridItem>
      </GridContainer>

      

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
 
import React, { useState, useEffect } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import GetAppIcon from '@material-ui/icons/GetApp';

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js"
import Parallax from "components/Parallax/Parallax.js";

import resume from "assets/documents/Resume.pdf";
import profile from "assets/img/faces/edwina.JPG";
import styles from "assets/jss/material-kit-react/views/profilePage.js";

// react pdf & support for annotations 
import { Document, Page, pdfjs } from "react-pdf";
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'; // using ES6 modules
import 'react-pdf/dist/umd/Page/AnnotationLayer.css'; // using CommonJS modules
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }

  function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    console.log(windowDimensions);

    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);

    }, []);

    return windowDimensions;
  }

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
          <div className={classes.container} margin={"0px auto"}  >
            <GridContainer justify="center" width="100%" >
                <GridItem xs={6} sm={6} md={6}>
                  <div className={classes.profile}>
                    <img src={profile} alt="..." className={imageClasses} />
                  </div>
                </GridItem>
                    <Document
                      file={resume}
                      options={{ workerSrc: "pdf.worker.js"}}
                      onLoadSuccess={onDocumentLoadSuccess}
                    >
                      <Page pageNumber={pageNumber} width={useWindowDimensions().width*0.65} textAlign="Center"> 
                        <GridContainer justify="center">
                            <h3 className={classes.title} marginBottom={250}> <a href={resume} download="RESUME BURTON_EDWINA" style={{ fontFamily: 'Exo, sans-serif', color: '#073763', fontWeight: 1000 }}> Download <GetAppIcon fontSize="large" style={{ verticalAlign: "bottom" }}/> </a> </h3>
                        </GridContainer>
                      </Page>
                    </Document>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

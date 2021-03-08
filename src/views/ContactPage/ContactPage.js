import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";

import styles from "assets/jss/material-kit-react/views/loginPage.js";

import image from "assets/img/bg7.jpg";

const useStyles = makeStyles(styles);

export default function LoginPage(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        absolute
        color="transparent"
        brand="Edwina Burton"
        rightLinks={<HeaderLinks />}
        {...rest}
      />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem cs={12} sm={12} md={8}>
                <h2 className={classes.title}>Work with Me</h2>
                <h4 className={classes.description}>
                    Write a few lines about your project need and contact me about any further
                    collaboration. I will respond within 48hrs.
                </h4>
            <form>
                <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                    labelText="Your Name"
                    id="name"
                    formControlProps={{
                        fullWidth: true
                    }}
                    />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                    labelText="Your Email"
                    id="email"
                    formControlProps={{
                        fullWidth: true
                    }}
                    />
                </GridItem>
                <CustomInput
                    labelText="Your Message"
                    id="message"
                    formControlProps={{
                    fullWidth: true,
                    className: classes.textArea
                    }}
                    inputProps={{
                    multiline: true,
                    rows: 5
                    }}
                />
                <GridItem xs={12} sm={12} md={4}>
                    <Button color="primary">Send Message</Button>
                </GridItem>
                </GridContainer>
            </form>
            </GridItem>
          </GridContainer>
        </div>
        <Footer whiteFont />
      </div>
    </div>
  );
}

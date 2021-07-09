/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import Divider from "@material-ui/core/Divider";
import Typography from '@material-ui/core/Typography';

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Projects"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link to="/front-end" className={classes.dropdownLink}>
              Front-End
            </Link>,
            <Link to="/back-end" className={classes.dropdownLink}>
              Back-End
            </Link>,
            // <Link to="/password-generator" className={classes.dropdownLink}>
            //   Password Generator
            // </Link>,
            // <Link to="/javascript-quiz" className={classes.dropdownLink}>
            //   JavaScript Quiz
            // </Link>,
            // <Link to="/weather-dashboard" className={classes.dropdownLink}>
            //   Weather Dashboard 
            // </Link>,
            // <Link to="/employee-directory" className={classes.dropdownLink}>
            // Employee Directory
            // </Link>,
            // <Link to="/note-taker" className={classes.dropdownLink}>
            //   Note Taker
            // </Link>,
            // <Link to="/readme-generator" className={classes.dropdownLink}>
            //   README Generator
            // </Link>,
            // <Link to="/employee-tracker" className={classes.dropdownLink}>
            //   Employee Tracker
            // </Link>,
            // <Link to="/budget-tracker" className={classes.dropdownLink}>
            //   Budget Tracker
            // </Link>            
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem} >
        {/* <Link to="/contact-page" className={classes.title} > */}
          <Button
            color="transparent"
            className={classes.navLink}
            // to="/contact-page"
            to="/resume-page"
            component={Link}
          >
            Resume
          </Button>
        {/* </Link> */}
      </ListItem>
      <ListItem className={classes.listItem} >
        {/* <Link to="/contact-page" className={classes.title} > */}
          <Button
            color="transparent"
            className={classes.navLink}
            // to="/contact-page"
            to="/contact-page"
            component={Link}
          >
            Contact
          </Button>
        {/* </Link> */}
      </ListItem>
      <ListItem className={classes.listItem}>
        {/*<Tooltip title="Delete">
          <IconButton aria-label="Delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>*/}
        <Tooltip
          id="instagram-github"
          title="Follow Me on GitHub"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://github.com/E-Burton"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-github"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-linkedin"
          title="Follow Me on LinkedIn"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.linkedin.com/in/edwina-burton/"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-linkedin"} />
          </Button>
        </Tooltip>
      </ListItem>
      {/* <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Follow us on instagram"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-instagram"} />
          </Button>
        </Tooltip>
      </ListItem> */}
    </List>
  );
}

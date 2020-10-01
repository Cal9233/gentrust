import React, { useState } from "react";
import { Link } from "react-router-dom";
import MobileRightMenuSlider from "@material-ui/core/Drawer";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  IconButton,
  ListItemIcon,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Home, Apps, ContactMail } from "@material-ui/icons";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  menuSlider: {
    background: "#00008b",
    height: "100%",
    width: "100%",
  },
  listItem: {
    color: "#FFFFFF",
  },
}));

const menuIcon = [
  {
    listIcon: <Home />,
    listText: "Home",
    listPath: "/",
  },
  {
    listIcon: <Apps />,
    listText: "About",
    listPath: "/about",
  },
  {
    listIcon: <ContactMail />,
    listText: "Contact",
    listPath: "/contact",
  },
];

const Header = () => {
  const [nav, setNav] = useState({
    right: false,
  });

  const toggleSlider = (slider, open) => () => {
    setNav({ ...nav, [slider]: open });
  };

  const classes = useStyles();

  const sideList = (slider) => (
    <Box
      className={classes.menuSlider}
      component="div"
      onClick={toggleSlider(slider, false)}
    >
      <List>
        {menuIcon.map((lsItem, key) => (
          <ListItem button key={key} component={Link} to={lsItem.listPath}>
            <ListItemIcon className={classes.listItem}>
              {lsItem.listIcon}
            </ListItemIcon>
            <ListItemText
              className={classes.listItem}
              primary={lsItem.listText}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <>
      <Box component="nav">
        <AppBar position="static" className={classes.root}>
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              arial-label="menu"
              onClick={toggleSlider("left", true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              GenThrust
            </Typography>
            <MobileRightMenuSlider
              anchor="left"
              open={nav.left}
              onClose={toggleSlider("left", false)}
            >
              {sideList("left")}
            </MobileRightMenuSlider>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Header;

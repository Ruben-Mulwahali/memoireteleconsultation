import React from "react";
import {
  AppBar,
  Box,
  Hidden,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import Profile from "./NavbarTab/Profile";
import Notification from  "./NavbarTab/Notification";
import { useStyles } from "./HeaderStyles";
import Messages from  "./NavbarTab/Messages";
import MenuIcon from "@material-ui/icons/Menu";

export default function Navbar({ handleDrawerOpen }) {
  const classes = useStyles();

  return (
    <AppBar position='fixed'>

      <Toolbar className={classes.toolbar}>

        <Typography variant='h6' className={classes.logo}>
          {"Administration Système"}
        </Typography>
        
        <Hidden smDown>
          <Box style={{ display: "flex" }}>
            <Notification />
            <Messages />
            <Profile />
          </Box>
        </Hidden>

        <Hidden mdUp>
          <IconButton color='inherit' onClick={handleDrawerOpen}>
            <MenuIcon />
          </IconButton>
        </Hidden>

      </Toolbar>

    </AppBar>
  );
}

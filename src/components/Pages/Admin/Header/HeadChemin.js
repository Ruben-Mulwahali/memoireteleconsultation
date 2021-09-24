import React, { useState } from "react";
import { Box } from "@material-ui/core";
import Navbar from "./Navbar";
import Sidenav from "./Sidenav";
import { Switch, Route } from "react-router-dom";
//import Dashboard from "../BodyComponent/Dashboard/Dashboard";
//import BlogComponent from "../BodyComponent/BlogComponent";

import { useStyles } from "./HeaderStyles";

export default function Head() {
  const classes = useStyles();

  const [mobileOpen, setMobileOpen] = useState(false);
 
  const handleDrawerOpen = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleDrawerClose = () => {
    setMobileOpen(false);
  };

  return (
    <div>
      
      <Navbar />
      <Sidenav />
           
    </div>
  );
}

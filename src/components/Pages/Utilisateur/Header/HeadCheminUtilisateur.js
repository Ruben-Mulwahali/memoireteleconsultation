import React, { useState } from "react";
import { Box } from "@material-ui/core";
import Navbar from "./Navbar";
import Sidenav from "./Sidenav";
import { Switch, Route } from "react-router-dom";
//import Accueil from "../Pages/Admin/Accueil";
//import Profile from "../ProfileUtilisateur";
//import ChatUtilisateur from "../ChatUtilisateur";
//import Resultat from "../Resultat";
import { useStyles } from "./HeaderStyles";

export default function Head() {
  const classes = useStyles();

  

  return (
    <div>
      
      <Navbar />
      <Sidenav/>
            
    </div>
  );
}

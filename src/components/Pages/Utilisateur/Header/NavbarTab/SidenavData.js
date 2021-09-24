import React, {useState}  from "react";
import {
  Collapse,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
} from "@material-ui/core";

import { ExpandLess, ExpandMore, Settings } from "@material-ui/icons";

import * as RiIcons from 'react-icons/ri';
import * as IoIcons from 'react-icons/io';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

import DashboardIcon from "@material-ui/icons/Dashboard";
import BookIcon from "@material-ui/icons/Book";
import PostAddIcon from "@material-ui/icons/PostAdd";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import PersonIcon from "@material-ui/icons/Person";
import SettingsIcon from "@material-ui/icons/Settings";
import StorageIcon from "@material-ui/icons/Storage";
import { NavLink } from "react-router-dom";
import { useStyles } from "../HeaderStyles";



export default function SidenavData() {


        const [open, setOpen] = useState(false);
          
        const clic = () => {

          setOpen(!open);
          
        };

        const classes = useStyles();

        const listItemData = [

          { 
            label: "Accueil", 
            link: "/Accueil", 
            icon: <DashboardIcon  />  
          }

        ];


        const listSousMmenu= [

              { 
                label: "Profile", 
                link: "/Profile", 
                icon: <PersonIcon  />  
              },

              { 
                label: "Chat ", 
                link: "/Chat", 
                icon: <ForumIcon />

              },

              { 
                label: "Resultat", 
                link: "/Resultat", 
                icon: <SettingsIcon />
              }
        ];

        const Deconnect= [

          { 
            label: "Deconnexion", 
            link: "/Deconnexion", 
            icon: <PowerSettingsNewIcon />  
          }

        ];

  

  return (

        <List>


              {
                
                listItemData.map((item, i) => (

                  <Button size='small' className={classes.navButton}  key={i}>

                      <ListItem exact component={NavLink} to={item.link} className={classes.navlinks} activeClassName={classes.activeNavlinks}>
                          
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText>  {item.label} </ListItemText>
                                                                                                
                      </ListItem>

                  </Button>
                ))
                
              }
              
              <ListItem button style={{ color: "white" }} onClick={clic}>
                
                    <ListItemIcon style={{ marginLeft: "2.5%" }} > 
                      <StorageIcon style={{ color: "white" }} />
                    </ListItemIcon>

                    <ListItemText primary="Mes Données" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                    
              </ListItem>

                          
              <Collapse in={open} timeout="auto" unmountOnExit style={{ marginLeft: "20%" }}>

                {
                
                      listSousMmenu.map((item, i) => (

                        <Button size='small' className={classes.navButton} key={i}>

                            <ListItem exact component={NavLink} to={item.link} className={classes.navlinks} activeClassName={classes.activeNavlinks}>
                                
                                  <ListItemIcon>{item.icon}</ListItemIcon>
                                  <ListItemText>  {item.label} </ListItemText>
                                                                                                      
                            </ListItem>

                        </Button>
                      ))
                      
                }

              </Collapse>

              {
                
                Deconnect.map((item, i) => (

                  <Button size='small' className={classes.navButton}  key={i}>

                      <ListItem exact component={NavLink} to={item.link} className={classes.navlinks} activeClassName={classes.activeNavlinks}>
                          
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText>  {item.label} </ListItemText>
                                                                                                
                      </ListItem>

                  </Button>
                ))
                
              }

        </List>
  );
}

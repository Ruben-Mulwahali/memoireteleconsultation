import React, {useState}  from "react";
import {
  Collapse,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
} from "@material-ui/core";

import { ExpandLess, ExpandMore } from "@material-ui/icons";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PostAddIcon from "@material-ui/icons/PostAdd";
import ForumIcon from "@material-ui/icons/Forum";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import PersonIcon from "@material-ui/icons/Person";
import SettingsIcon from "@material-ui/icons/Settings";
import PersonAddIcon from '@material-ui/icons/PersonAdd';

import { NavLink } from "react-router-dom";
import { useStyles } from "../HeaderStyles";


export default function SidenavData() {

        const [open, setOpen] = useState(false);
          
        const clic = () => {

          setOpen(!open);
          
        };

        const classes = useStyles();

        const ItemVague1=[
          { 
            label: "Accueil", 
            link: "/Adashboard1", 
            icon: <DashboardIcon  />  
          },

          { 
            label: "Patients", 
            link: "/Patients", 
            icon: <PersonIcon /> 
          },

          { 
            label: "Consultation", 
            link: "/Consultation", 
            icon: <PostAddIcon  />  
          }
        ];

        const ItemVague3=[
          { 
            label: "Identification", 
            link: "/Identification", 
            icon: <PersonAddIcon  />  
          },

          { 
            label: "Agent", 
            link: "/Agent", 
            icon: <PersonIcon /> 
          },

          { 
            label: "Resultat", 
            link: "/Resultat", 
            icon: <ForumIcon /> 
          }

        ];

        const ItemVague4=[
          { 
            label: "Deconnexion", 
            link: "/Malade", 
            icon: <PowerSettingsNewIcon />  
          }
        ];

  return (

        <List>

                {
                  
                  ItemVague1.map((item, i) => (

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
                        <SettingsIcon style={{ color: "white" }} />
                      </ListItemIcon>

                      <ListItemText primary="Paramettre" />
                      {open ? <ExpandLess /> : <ExpandMore />}
                      
                </ListItem>

                            
                <Collapse in={open} timeout="auto" unmountOnExit style={{ marginLeft: "20%" }}>

                    {
                  
                        ItemVague3.map((item, i) => (

                          <Button size='small' className={classes.navButton}  key={i}>

                              <ListItem exact component={NavLink} to={item.link} className={classes.navlinks} activeClassName={classes.activeNavlinks}>
                                  
                                    <ListItemIcon>{item.icon}</ListItemIcon>
                                    <ListItemText>  {item.label} </ListItemText>
                                                                                                        
                              </ListItem>

                          </Button>
                        ))
                        
                    }

                </Collapse>


              
                {
                  
                  ItemVague4.map((item, i) => (

                    <Button size='small' className={classes.navButton} skey={i}>

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

import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {makeStyles}  from '@material-ui/core';
import { teal } from '@material-ui/core/colors';
import HeadChemin from '../components/Pages/Admin/Header/HeadChemin';
import HeadCheminUtilisateur from '../components/Pages/Utilisateur/Header/HeadCheminUtilisateur';
import Editor from '../components/Pages/Admin/Editor';
import PhotoPicker from '../components/Pages/Admin/PhotoPicker';
import ContainerSignInOut from '../components/Login/ContainerSignInOut';
import ChatUtilisateur from '../components/Pages/Utilisateur/ChatUtilisateur';
import ProfileUtilisateur from '../components/Pages/Utilisateur/ProfileUtilisateur';

import Consultation from "../components/Pages/Admin/Consultation";
import Examen from "../components/Pages/Admin/Examen";
import Patients from "../components/Pages/Admin/Patients";
import Adashboard1 from "../components/Pages/Admin/Adashboard1";
import Agent from "../components/Pages/Admin/Agent";
import Malade from "../components/Pages/Admin/Malade";
import Identification from "../components/Pages/Admin/Identification";
import LoginAgent from '../components/Login/LoginAgent';

import { Box } from "@material-ui/core";
import { useStyles } from '../components/Pages/Utilisateur/Header/HeaderStyles';


function App() {

  const classes = useStyles();

  return (

      <Router>
                       <Switch>
                                <Route exact path="/LoginAgent" component={LoginAgent} />
                                <Route exact path="/Login" component={ContainerSignInOut} />
                                <Route path="/HeadCheminUtilisateur"  component={HeadCheminUtilisateur}/>
                                <Route path="/HeadChemin"  component={HeadChemin}/>
                                
                                <Box className={classes.wrapper}>

                                    {/** Routes Cotes Administraction */}
                                    
                                      <Route  path='/Adashboard1' component={Adashboard1} />
                                      <Route  path='/Consultation' component={Consultation} />
                                      <Route  path='/Identification' component={Identification} />
                                      <Route  path='/Patients' component={Patients } />
                                      <Route  path='/Agent' component={Agent} />
                                      <Route  path='/Malade' component={Malade} />
                                                                               
                                    
                                    {/** Routes Cotes Utilisateurs */}

                                      <Route path="/Profile" component={ProfileUtilisateur}  />
                                      <Route path="/Chat" component={ChatUtilisateur}  />
                                  
                                </Box>
                       
                      </Switch>
                     
      </Router>           
  );

}

export default App;

import React from 'react'
import Pageheader from './Pageheader'
import { Paper} from '@material-ui/core';
import PeopleOutlineTwoToneIcon from "@material-ui/icons/PeopleOutlineTwoTone";
import { useStyles } from "./PageStyles";
import { UserForm, Form} from './UserForm';
import Controls from '../../Controls/Controls';
import {Grid} from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';

import { withStyles, makeStyles } from '@material-ui/core/styles';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';




const TypeUtilisateur=[

    { id:"1" , title:"Patient" },
    { id:"2" , title:"Medecin"},
    { id:"3" , title:"Infirmier"},
    { id:"3" , title:"Admin"}
]


const InitialFValues={

    Id: 0,
    Fullname:"",
    Email:"",
    Username:"",
    Pwd:"",
    TypeCompte : "",
  
}


export default function Utilisateur() {

    const classes = useStyles();

    return (
        <>
            <Pageheader

                title =" Gestion des Utlisateurs "
                subtitle="Page Description"
                icon ={ <PeopleOutlineTwoToneIcon/> }  

            /> 

            <Paper className={classes.pageContent}>

                <Form>
                    <Grid container > 

                        <Grid item xs={6} >

                                    <Controls.Input 
                                    
                                        label="Noms Complet"
                                        name="Fullname"
                                       // value={values.value}
                                        // onChange={handleInputChange}
                                        // error={errors.Fullname}
                                    />
                                    
                                    <Controls.Input 
                                        
                                        label="Email"
                                        name="Email"
                                        //value={values.Email}
                                        // onChange={handleInputChange}
                                        // error={errors.Email}
                                    />

                                    <Controls.Input 
                                        
                                        label="Nom d'Utilisateur"
                                        name="Username"
                                        // value={values.Mobile}
                                        // onChange={handleInputChange}
                                        //  error={errors.Mobile}
                                    />

                                    <Controls.PwdInput
                                        
                                        label="Mot de passe "
                                        name="Pwd"
                                       
                                    />

                                    <Controls.Select

                                        label="Type"
                                        name="TypeCompte"
                                        //value={values.DepartmentId}
                                        //onChange={handleInputChange}
                                        options={TypeUtilisateur}
                                        
                                    />                         

                        </Grid>

                        <Grid item xs={6}>

                          <h2> Tableaux </h2>
                            
                        </Grid>

                    </Grid>
                </Form>

            </Paper>
            
        </>
    )
}

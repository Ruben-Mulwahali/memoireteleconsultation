import React from 'react'
import Pageheader from './Pageheader'
import { Paper} from '@material-ui/core';
import PeopleOutlineTwoToneIcon from "@material-ui/icons/PeopleOutlineTwoTone";
import { useStyles } from "./PageStyles";
import { UserForm, Form} from './UserForm';
import Controls from '../../Controls/Controls';
import {Grid} from '@material-ui/core';
import PostAddIcon from "@material-ui/icons/PostAdd";


const InitialFValues={

    Id: 0,
    Fullname:"",
    Email:"",
    Mobile:"",
    City:"",
    Gender : "male",
    DepartmentId : "",
    HereDate: new Date(),
    Ispermanent: false,
}



export default function Examen() {

    const classes = useStyles();

    return (
        <>
            <Pageheader

                title ="Liste des Examens"
                subtitle="Page Description"
                icon ={ <PostAddIcon/> }  

            /> 

            <Paper className={classes.pageContent}>

                <Form>
                        <Grid container>
                            <Grid item xs={6} >

                                    <Controls.Input 
                                        
                                            label="Full name"
                                            name="Fullname"
                                            //value={values.value}
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
                                            
                                            label="Mobile"
                                            name="Mobile"
                                        // value={values.Mobile}
                                        // onChange={handleInputChange}
                                        //  error={errors.Mobile}
                                    />

                                    <Controls.Input 
                                            
                                            label="Cite"
                                            name="City"
                                            //value={values.City}
                                            // onChange={handleInputChange}
                                            // error={errors.City}
                                    />

                                    <Controls.Input 
                                            
                                            label="Cite"
                                            name="City"
                                            //value={values.City}
                                            // onChange={handleInputChange}
                                            // error={errors.City}
                                    />
                                      
                            </Grid>

                            <Grid xs={6}>
                                    <h2> Tableaux </h2>
                            </Grid>

                        </Grid>
                </Form>

            </Paper>
            
        </>
    )
}

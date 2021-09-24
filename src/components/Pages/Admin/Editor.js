import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { UserForm, Form} from './UserForm';
import Controls from '../../Controls/Controls';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    //textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));



export default function Editor() {

    const GetIdPatient=[

        { id:"1" , title:"18IGGJ008041" },
        { id:"2" , title:"18IGGJ008042"},
        { id:"3" , title:"18IGGJ008043"},
        { id:"4" , title:"18IGGJ008045"}
    ]
    
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

  const classes = useStyles();

  return (
    
    <div className={classes.root}>
      
      <Grid container spacing={2}>

                <Grid item xs={8}>

                    <Paper className={classes.paper}>

                    <Form>
                                <Grid container > 

                                    <Grid item xs={6} >

                                                <Controls.Select

                                                    label="Id"
                                                    name="TypeCompte"
                                                    //value={values.DepartmentId}
                                                    //onChange={handleInputChange}
                                                    options={GetIdPatient}

                                                />   

                                                <Controls.Select

                                                label="Type"
                                                name="TypeCompte"
                                                //value={values.DepartmentId}
                                                //onChange={handleInputChange}
                                                options={GetIdPatient}

                                                />  
                                                                            
                                    </Grid>

                                    <Grid item xs={6}>

                                                <Controls.Input 
                                                    
                                                    label="Noms Complet"
                                                    name="Fullname"
                                                    //value={values.City}
                                                    // onChange={handleInputChange}
                                                    // error={errors.City}
                                                />  

                                                <Controls.Select

                                                label="Type"
                                                name="TypeCompte"
                                                //value={values.DepartmentId}
                                                //onChange={handleInputChange}
                                                options={GetIdPatient}

                                                />              

                                    </Grid>


                                    <Grid item xs={12}> 

                          
                                        <h3>Plaintes du patient</h3>

                                        <Controls.RichText

                                            //onChange={handleOnChange}
                                                                            
                                        />

                                        <h3> Prescriptions </h3>

                                        <Controls.RichText

                                            // onChange={handleOnChange}
                                                                            
                                        />
                                    </Grid>

                                </Grid>
                            </Form>

                    </Paper>

                </Grid>

                <Grid item xs={4}>

                    <Paper className={classes.paper}>

                        <h2> Discussion avec le patient </h2>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                      
                                            
                    </Paper>

                </Grid>            

                
      </Grid>

    </div>
  );
}

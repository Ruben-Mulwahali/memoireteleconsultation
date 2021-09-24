import React from 'react'
import Pageheader from './Pageheader'
import { Paper} from '@material-ui/core';
import PostAddIcon from "@material-ui/icons/PostAdd";
import { useStyles } from "./PageStyles";
import { UserForm, Form} from './UserForm';
import Controls from '../../Controls/Controls';
import {Grid,TextField} from '@material-ui/core';
import ForumIcon from "@material-ui/icons/Forum";
import Sidnav from "./Header/Sidenav";
import Navbar from "./Header/Navbar";
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import {InputBase} from '@material-ui/core';


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


export default function Consultation() {
   

    const handleOnChange=(e, editor)=>{
        console.log(editor.getData());
    }

    const classes = useStyles();

    return (
        <>
            
            <Navbar />
            <Sidnav/>

            <Pageheader

                title ="Fiche de Consultation"
                subtitle="Page Description"
                icon ={ <PostAddIcon/> }  

            /> 


            <div className={classes.root}>
      
                <Grid container spacing={2}>

                    <Grid item xs={8}>

                        <Paper className={classes.paper}>

                            <Form>
                                <Grid container > 
                                    
                                    <Grid item xs={12}>

                                        <Paper component="form" className={classes.searchInput}> 
                                            <InputBase
                                                className={classes.input}
                                                placeholder="Entrez le nom du patients"
                                                inputProps={{ 'aria-label': 'search google maps' }}
                                            />
                                            <IconButton type="submit" className={classes.iconButton} aria-label="search">
                                                <SearchIcon />
                                            </IconButton>
                                        </Paper>
                                        <br/>
                                    </Grid>
                                       
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
                                                    size="Small"
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

                                            onChange={handleOnChange}
                                                                            
                                        />

                                        <h3> Prescriptions </h3>

                                        <Controls.RichText

                                            onChange={handleOnChange}
                                                                            
                                        />
                                    </Grid>

                                </Grid>
                            </Form>

                        </Paper>

                    </Grid>

                    <Grid item xs={4}>

                        <Paper className={classes.paper}>

                            <h3> <ForumIcon /> Chat avec le patient </h3>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
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
            
            
        
        </>
    )
}

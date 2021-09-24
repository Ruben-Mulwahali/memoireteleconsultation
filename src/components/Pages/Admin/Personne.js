
import React from 'react';
import 'date-fns';
import DateFnsUtils from "@date-io/date-fns";
import { 
    
    Grid, Paper, makeStyles, Avatar, Typography, TextField, Button, InputLabel,Checkbox,
    MenuItem,FormControl, Select, Radio,RadioGroup,FormControlLabel,FormLabel

} from '@material-ui/core';

import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';

import PhotoPicker from './PhotoPicker';
import PersonIcon from "@material-ui/icons/Person";
import Sidnav from "./Header/Sidenav";
import Navbar from "./Header/Navbar";
import Pageheader from './Pageheader';
import Controls from '../../Controls/Controls';






const useStyles = makeStyles(theme => ({

    pageContent:{
        
        margin: theme.spacing(0),
        padding: theme.spacing(3),
        backgroundColor: '#efefef',
    },

    formControl: {
      
        minWidth: 165,
    },

}));


export default function Personne() {

    const [selectedDate, setSelectedDate] = React.useState(new Date());

    const handleDateChange = (date) => {
      setSelectedDate(date);
    };

    const classes = useStyles();

    return (
        <div>

            <Navbar />
            <Sidnav/>

            <Pageheader

                title ="Identification"
                subtitle="Page Description"
                icon ={  <PersonIcon  /> }  

            />  

            <Paper className={classes.pageContent}>
                <Grid container>

                    <Grid item sm={1}>
                                             
                    </Grid>

                    <Grid item sm={4}>

                         <TextField name="nom"  fullWidth label='Noms Complet' placeholder="Entrez votre nom complet" />  <br/>  <br/>
                        
                         <FormControl component="fieldset" >
                            
                            <FormLabel component="legend">Sexe</FormLabel>

                            <RadioGroup aria-label="Sexe" name="sexe" style={{ display: 'initial' }}>
                                
                                <FormControlLabel value="Masculin"  control={<Radio />} label="Masculin" />  
                                <FormControlLabel value="Feminin" control={<Radio />} label="Féminin" />
                                
                            </RadioGroup>

                        </FormControl> 

                        <TextField
                                    id="date"
                                    label="Date de Naissance"
                                    type="date"
                                    defaultValue="2021-09-09"
                                    className={classes.textField}
                                    InputLabelProps={{
                                    shrink: true,
                                    }}
                        /> <br/>

                        <FormControl className={classes.formControl}>
                            <InputLabel id="demo-controlled-open-select-label">Etat Civil</InputLabel>
                            <Select
                                labelId="demo-controlled-open-select-label"
                                id="demo-controlled-open-select"
                                //open={open}
                                //onClose={handleClose}
                                //onOpen={handleOpen}
                                //value={age}
                                //onChange={handleChange}
                            >
                                  
                                    <MenuItem value="Célibataire">Célibataire</MenuItem>
                                    <MenuItem value="Marié(e)">Marié(e)</MenuItem>
                                    <MenuItem value="Divorcé(e)">Divorcé(e)</MenuItem>
                                    <MenuItem value="Veuf(ve)">Veuf(ve)</MenuItem>
                                    <MenuItem value="Separé(e)">Separé(e)</MenuItem>

                            </Select>
                        </FormControl> <br/>

                         <TextField name="adresse"  fullWidth label='Adresse' placeholder="Entrez votre Adresse" />
                         <TextField name="contact"  fullWidth label='Contact' placeholder="Entrez votre Contact" />
                         <TextField name="email"  fullWidth label='E-mail' placeholder="Entrez votre mail" />
                         <TextField name="pwd"  fullWidth label='Mot de passe' placeholder="Entrez votre mot de passe" />
                                                                                                   
                    </Grid>

                    <Grid item sm={1}>
                            <br/>                        
                    </Grid>

                    <Grid item sm={4}>                     

                        <FormControl className={classes.formControl}>
                            <InputLabel id="demo-controlled-open-select-label">Type Patient </InputLabel>
                            <Select
                                labelId="demo-controlled-open-select-label"
                                id="demo-controlled-open-select"
                                //open={open}
                                //onClose={handleClose}
                                //onOpen={handleOpen}
                                //value={age}
                                //onChange={handleChange}
                            >
                                  
                                    <MenuItem value="Privé(e)">Privé(e)</MenuItem>
                                    <MenuItem value="Abonné(e)">Abonné(e)</MenuItem>
                                    
                            </Select>
                        </FormControl>
                        <TextField name="allergie" autoComplete="off" fullWidth label='Medicament Allergique' placeholder="Entrez votre medicament allergique" />
                        
                        <PhotoPicker/>   
                        <br/>
                    
                        <div>
                                <Controls.Button
                                    
                                    text="Submit"
                                    type="Submit"
                                />

                                <Controls.Button
                                
                                    text="Reset"
                                    color="default"
                                    //onClick={}
                                />
                        </div>
                    </Grid>
                </Grid>
                                    <br/>
                                    <br/>
                                    
                <Grid container>
                    <Grid sm={1}></Grid>
                    <Grid sm={10}>
                        <h2> Tableau </h2>
                    </Grid>
                    <Grid sm={1}></Grid>
                </Grid>

            </Paper>

        </div>
    )
}

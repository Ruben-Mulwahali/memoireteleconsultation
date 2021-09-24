import React from 'react';
import { 
    
    Grid, Paper, makeStyles, Avatar, Typography, TextField, Button, InputLabel,Checkbox, NativeSelect,
    MenuItem,FormControl, Select, Radio,RadioGroup,FormControlLabel,FormLabel,withStyles,InputBase 

} from '@material-ui/core';
import Controls from '../../Controls/Controls';
import {UserForm, Form} from './UserForm';
import PersonIcon from "@material-ui/icons/Person";
import Sidnav from "./Header/Sidenav";
import Navbar from "./Header/Navbar";
import Pageheader from './Pageheader';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from "@date-io/date-fns";

import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';

import Axios from "../../../Axios/Axios";

const GetSexe=[

    { id:"Masculin", title:"Masculin" },
    { id:"Feminin", title:"Féminin"},
  
]

const useStyles = makeStyles(theme => ({
   

    pageContent:{
        
        margin: theme.spacing(0),
        padding: theme.spacing(3),
        backgroundColor: '#efefef',
    }

}));

export default function Malade() {

    const [SelectedDate, setSelectedDate] = React.useState("");

    const classes = useStyles();

    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
      });
    
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
    
      const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
    

    return (
        <div>
            <Navbar />
            <Sidnav/>

            <Pageheader

                title ="Identification"
                subtitle="Page Description"
                icon ={  <PersonIcon  /> }  

            />  

            <Paper className={classes.pageContent} >

               <Form>

                    <Grid container>

                        <Grid item sm={6}>
                                        <Controls.Input
                                            
                                            label="Noms complet"
                                            name="NomsC"
                                            //value={values.value}
                                            //onChange={handleInputChange}
                                            //error={errors.NomsC}
                                                                
                                        />

                                        <Controls.RadioGroup

                                            label="Sexe"
                                            name="Sexe"
                                            //value={values.Sexe}
                                            //onChange={handleInputChange}
                                            items={GetSexe}
                                        />

                                        <MuiPickersUtilsProvider utils={DateFnsUtils} >
                                        
                                        <KeyboardDatePicker  disableToolbar variant="inline" inputVariant="outlined"

                                            label="Date de Naissance"
                                            format="dd/MMM/yyyy"
                                            //="SeleectedDate"
                                            //value="SeleectedDate"
                                            onChange={(e)=>setSelectedDate(e.target.value)}        
                                        />
                                        
                                        </MuiPickersUtilsProvider>


                                        <Controls.Input
                                                            
                                            label="Adresse"
                                            name="Adresse"
                                            //value={values.value}
                                           // onChange={handleInputChange}
                                            //error={errors.NomsC}
                                                                
                                        />
                                        <Controls.Input
                                                            
                                            label="Contact"
                                            name="Contact"
                                            //value={values.value}
                                            //onChange={handleInputChange}
                                            //error={errors.NomsC}
                                                                
                                        />
                                    
                                    <Controls.Input
                                                        
                                        label="E-mail"
                                        name="Email"
                                        //value={values.value}
                                        //onChange={handleInputChange}
                                        //error={errors.NomsC}
                                                            
                                    />  
                                     <Controls.PwdInput
                                                        
                                        label="Mot de passe"
                                        name="Pwd"
                                        //value={values.value}
                                        //onChange={handleInputChange}
                                        //error={errors.NomsC}
                                                            
                                    />  
                        </Grid>

                        <Grid item sm={6}>
                                                    
                        <FormControl variant="outlined">
                           
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                size="small"
                                id="outlined-adornment-password"
                                type={values.showPassword ? 'text' : 'password'}
                                value={values.password}
                                onChange={handleChange('password')}
                                endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                    >
                                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                                }
                                labelWidth={70}
                            />
                            
                        </FormControl>

                        
                        </Grid>

                    </Grid>
                </Form>
            </Paper>
        </div>
    )
}

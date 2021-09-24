import React, {useState} from 'react';
import PatientForm from './PatientForm';
import Pageheader from './Pageheader';
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import { Paper,  makeStyles, TableBody, TableRow, TableCell} from '@material-ui/core';
import Sidnav from "./Header/Sidenav";
import Navbar from "./Header/Navbar";


const useStyles = makeStyles(theme => ({

    pageContent:{
        
        margin: theme.spacing(0),
        padding: theme.spacing(3),
        backgroundColor: '#efefef',
    }

}));

function Identification() {

    const classes = useStyles();
    //const [records, setRecords] = useState(PatientService.GetAllEmployees)
   
    return (
    <>
        <Navbar />
        <Sidnav/>

        <Pageheader

            title ="Idenfication"
            subtitle="Page Description"
            icon ={  <PersonAddIcon  /> }  

        />  
        
        <Paper className={classes.pageContent}>

            <PatientForm/> 

        </Paper>
        
        
    </>
  );
}

export default Identification;

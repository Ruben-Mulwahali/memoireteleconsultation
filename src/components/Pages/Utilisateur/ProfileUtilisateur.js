import React from 'react';
import Pageheader from './Pageheader';
import { Paper} from '@material-ui/core'; 
import { useStyles } from "./PageStyles";
import PeopleOutlineTwoToneIcon from "@material-ui/icons/PeopleOutlineTwoTone";
import Sidnav from "./Header/Sidenav";
import Navbar from "./Header/Navbar";

export default function Profile() {

    const classes = useStyles();

    return (
        <>
            <Navbar />
            <Sidnav/>

          <Pageheader

                title ="Profils du  patient"
                subtitle="Page Description"
                icon ={ <PeopleOutlineTwoToneIcon/> }  
               
            />  

            <Paper className={classes.pageContent} >

                    

            </Paper>

        </>
    )
}

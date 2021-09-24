import React from 'react';
import Pageheader from './Pageheader';
import { Paper} from '@material-ui/core'; 
import { useStyles } from "./PageStyles";
import PeopleOutlineTwoToneIcon from "@material-ui/icons/PeopleOutlineTwoTone";

export default function Resultat() {

    const classes = useStyles();

    return (
        <>

          <Pageheader

                title ="Resultat"
                subtitle="Page Description"
                icon ={ <PeopleOutlineTwoToneIcon/> }  

            />  

            <Paper className={classes.pageContent} >

            </Paper>

        </>
    )
}

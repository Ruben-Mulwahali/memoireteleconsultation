import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core';

export  function UserForm(InitialValues, validateOnchange=false, validate) {
 
    // Methode d'initialisation des valeur

    const [values, setvalues]=useState(InitialValues);
    const [errors, seterrors]=useState({});

    // fonction permettant d'ecrire dans les inputs

    const handleInputChange=e=>{

        const {name, value}=e.target
        setvalues({
            ...values,
            [name]:value
        })

        if(validateOnchange)
        validate({ [name]:value})

    }


    const resetForm=()=>{
        
        setvalues(InitialValues);
        seterrors({})
    }
    
    return {

        values,
        setvalues,
        errors,
        seterrors,
        handleInputChange,
        resetForm

    }
}


const useStyles = makeStyles(theme => ({
    root:{
            '& .MuiFormControl-root':{
                width: "80%",
                margin: theme.spacing(0.6)
            }
    }
}));

// fonction du formulaire

export  function Form(props) {

    const classes = useStyles();
    const {children,... other}=props;

  return (
        <form className={classes.root} autoComplete="off" {...other} > 
            { props.children}
        </form>
  );
}

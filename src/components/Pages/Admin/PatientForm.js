import { Grid} from '@material-ui/core';
import React, {useState, useEffect} from 'react';
import {UserForm, Form} from './UserForm';
import Controls from '../../Controls/Controls';
import PhotoPicker from './PhotoPicker';


const GetSexe=[

    { id:"Masculin", title:"Masculin" },
    { id:"Feminin" ,title:"Féminin"},
  
]

const GetTypePatient = () => ([

    { id:"1" , title:"Privé" },
    { id:"2" , title:"Abonné"},
    
])


const GetEtatcivil = () => ([

    { id:"1" , title:"Celibataire" },
    { id:"2" , title:"Marié(e)"},
    { id:"3" , title:"Divorcé(e)"},
    { id:"4" , title:"Veuf(e)"},
    { id:"5" , title:"Separé(e)"},
    
])




const InitialValues={

    Id: 0,
    NomsC:"",
    Email:"",
    Contact:"",
    Fonction:"",
    Sexe : "Masculin",
    NomUt : "",
    HereDate: new Date(),
    // Ispermanent: false,
    Adresse:"",
    EtatCivil:"",
   
}


function PatientForm() {
    
    // Fonction Verification des entree

    const validate=( fieldValues = values )=> {
            
        let temp={...errors}

        if('NomsC' in fieldValues)
            temp.NomsC= values.NomsC?"": "This fiel is required"

        if('Email' in fieldValues)
            temp.Email= (/$^|.+@.+..+/).test(values.Email)?"": "Email is not valid"

        if('Contact' in fieldValues)
            temp.Contact= values.Contact.length>9?"": "Minimum 9 numbers required"

        if('NomUt' in fieldValues)
            temp.NomUt= values.NomUt?"": "This fiel is required"

        if('Adresse' in fieldValues)
            temp.Adresse= values.Adresse?"": "This fiel is required"

        if('Pwd' in fieldValues)
            temp.Pwd= values.Pwd?"": "This fiel is required"

         if('EtatCivil' in fieldValues)
            temp.EtatCivil= values.EtatCivil.length !=0?"": "This fiel is required"

        seterrors({
            ...temp
        })

        if(fieldValues==values)
        return Object.values(temp).every(x => x =="")
    }

    // appel de differente fonction depuis le UserForm
    const{

        errors,
        seterrors,
        values, 
        setvalues, 
        handleInputChange,
        resetForm
    
    }=UserForm(InitialValues, true, validate);

    const handleSubmit = e =>{

        e.preventDefault()
        if(validate())

        {/* windows.alert('Testing') 
            PatientService.InsererEmployer(values)
            resetForm()
            */}
    }

    return (
        
        < Form onSubmit={handleSubmit} >

            <Grid container>

                <Grid item sm={6} >

                    <Controls.Input 
                       
                        label="Noms complet"
                        name="NomsC"
                        value={values.value}
                        onChange={handleInputChange}
                        error={errors.NomsC}
                    />
                    
                    <Controls.Input 
                       
                       label="Adresse"
                       name="Adresse"
                       value={values.value}
                       onChange={handleInputChange}
                       error={errors.Adresse}
                   />

                    <Controls.Select
                        
                        label="Etat Civil"
                        name="EtatCivil"
                        value={values.EtatCivil}
                        onChange={handleInputChange}
                        options={GetEtatcivil()}
                        
                    />

                   <Controls.Input 
                        
                        label="Contact"
                        name="Contact"
                        value={values.Contact}
                        onChange={handleInputChange}
                        error={errors.Contact}
                    />

                    <Controls.Input 
                        
                        label="Email"
                        name="Email"
                        value={values.Email}
                        onChange={handleInputChange}
                        error={errors.Email}
                    />

                    <Controls.Input 
                        
                        label="Nom d'Utilisateur"
                        name="NomUt"
                        value={values.NomUt}
                        onChange={handleInputChange}
                        error={errors.NomUt}
                    />

                    <Controls.PwdInput
                                        
                        label="Mot de passe "
                        name="Pwd"
                        value={values.Pwd}
                        onChange={handleInputChange}
                        error={errors.Pwd} 
                                  
                    />
                
                </Grid>

                <Grid item sm={6}>

                        <Controls.RadioGroup

                            label="Sexe"
                            name="Sexe"
                            value={values.Sexe}
                            onChange={handleInputChange}
                            items={GetSexe}
                        />

                        <Controls.DatePicker
                        
                        label="Date de Naissance "
                        name="HereDate"
                        value={values.HereDate}
                        onChange={handleInputChange}
                        
                         />

                        <PhotoPicker/>
                      
                        {/*

                        <Controls.Checkbox
                            name="Ispermanent"
                            label="Patient parmenant"     
                            value={values.Ispermanent}
                            onChange={handleInputChange}                       
                        />
                         */

                        }

                        <div>
                            <Controls.Button
                            
                                text="Submit"
                                type="Submit"
                            />

                            <Controls.Button
                            
                                text="Reset"
                                color="default"
                                onClick={resetForm}
                            />
                        
                        </div>
                </Grid>

            </Grid>
        </Form>
    );
}

export default PatientForm;

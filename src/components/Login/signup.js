import React from 'react'
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Axios from "../../Axios/Axios";
import {Etat} from "../../Etata/Etata";
import {useHistory} from "react-router-dom"


const Signup = () => {

    const paperStyle = { padding: 20, width: 300, margin: "0 auto", backgroundColor: '#F8F9F9'}
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const marginTop = { marginTop: 5 }
    const ush=useHistory();
    

    const [nom, setNom]=React.useState("")
    const [email, setEmail]=React.useState("")
    const [sexe, SetSexe]=React.useState("")
    const [pwd, SetPwd]=React.useState("")
    const [Confirm, SetConfirm]=React.useState("")
    const [errors, setErrors] =React.useState("")

    const Save=()=>{

        const data={
            nomcomplet:nom,
            password:pwd,
            email:email,
            sexe:sexe
        }
        
      try {
         
            Axios.post("auth/signin", data)
            .then((xyk)=>{
              console.log(xyk.data)
              ush.push("/")
            }).catch((error)=>{
                console.log(error.response.data)
            })
        
          
      } catch (error) {
          
      }
    }

    return (
        <Grid>
            <Paper style={paperStyle}>

                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <AddCircleOutlineOutlinedIcon />
                    </Avatar>
                    <h2 style={headerStyle}>Inscription</h2>
                    <Typography variant='caption' gutterBottom>Remplissez ce formulaire pour créer votre compte !</Typography>
                </Grid>

                <form>
                    
                    <TextField name="nom" value={nom} onChange={(e)=>setNom(e.target.value)} fullWidth label='Noms Complet' placeholder="Entrez votre nom complet" />
                    <TextField name="email" value={email} onChange={(e)=>setEmail(e.target.value)} fullWidth label='Email' placeholder="Entrez votre adresse mail" />
                    <br/>
                    <br/>
                    <FormControl component="fieldset" style={marginTop}>
                        
                        <FormLabel component="legend">Sexe</FormLabel>

                        <RadioGroup onChange={(e)=>SetSexe(e.target.value)} aria-label="Sexe" name="sexe" style={{ display: 'initial' }}>
                            
                            <FormControlLabel value="Masculin"  control={<Radio />} label="Masculin" />  
                            <FormControlLabel value="Feminin" control={<Radio />} label="Féminin" />
                            
                        </RadioGroup>

                    </FormControl>

                    <TextField  name="pwd" value={pwd} onChange={(e)=>SetPwd(e.target.value)} fullWidth  label='Mot de passe' type='password' placeholder="Entrez votre mot de passe"/>
                    <TextField fullWidth  label='Confirmez Mot de passe' type='password' placeholder="Confirmez votr mot de passe"/>
                    
                    <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        label="I accept the terms and conditions."
                    />
                    <Button onClick={()=>Save()} variant='contained' color='primary'>Sign up</Button>

                </form>
                
            </Paper>
        </Grid>
    )
}

export default Signup;
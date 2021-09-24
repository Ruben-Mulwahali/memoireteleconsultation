import React from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import HeadCheminUtilisateur from '../Pages/Utilisateur/Header/HeadCheminUtilisateur';
import HeadChemin from '../Pages/Admin/Header/HeadChemin';
import Axios from "../../Axios/Axios";
import {useHistory} from 'react-router-dom';




const Login=({handleChange})=>{

    let HST=useHistory();

    const paperStyle={padding :20,height:'73vh',width:300, margin:"0 auto", backgroundColor: '#F8F9F9'}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}


    const [email, setEmail]=React.useState("")
    const [pwd, SetPwd]=React.useState("")

    const Connect=()=>{

        const datax={

            logine:email,
            password:pwd
        }
      

        try {
           
            Axios.post("auth/login", datax).then((Requette)=>{


                console.log(Requette.data)
                HST.push("/HeadCheminUtilisateur")

            }).catch((error)=>{
                console.log(error.response.data)
            }) 

           

        } catch (error) {
            
        }
    }

    return(
        <Grid>
            <Paper  style={paperStyle}>
                <br/>
                <br/>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Connexion</h2>
                </Grid>

                <TextField name="email" value={email} onChange={(e)=>setEmail(e.target.value)} fullWidth label='Email' placeholder="Entrez votre adresse mail" />
                <TextField name="pwd"   value={pwd}   onChange={(e)=>SetPwd(e.target.value)} label='Password' placeholder='Enter password' type='password' fullWidth required/>
                
                <FormControlLabel
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Remember me"
                 />

                <Button  color='primary' variant="contained" style={btnstyle} fullWidth onClick={()=>Connect()} > 
                
                    Sign in 
                                
                </Button>
                
                <Typography >
                    <Link href="#" >
                        Forgot password ?
                    </Link>
                </Typography>

                <Typography > Do you have an account ?
                    <Link href="#" onClick={()=>handleChange("event",1)} >
                        Sign Up 
                    </Link>
                </Typography>

            </Paper>
        </Grid>
    )
}

export default Login
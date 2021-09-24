
import React from 'react';
import 'date-fns';
import DateFnsUtils from "@date-io/date-fns";
import { 
    
    Grid, Paper, makeStyles, Avatar, Typography, TextField, Button, InputLabel,Checkbox, NativeSelect,
    MenuItem,FormControl, Select, Radio,RadioGroup,FormControlLabel,FormLabel,withStyles,InputBase,IconButton

} from '@material-ui/core';

import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';

import PhotoPicker from './PhotoPicker';
import PersonIcon from "@material-ui/icons/Person";
import{ Update} from "@material-ui/icons";
import Sidnav from "./Header/Sidenav";
import Navbar from "./Header/Navbar";
import Pageheader from './Pageheader';
import Controls from '../../Controls/Controls';
import Axios from "../../../Axios/Axios";
import Tableau from "./Tableau";

const BootstrapInput = withStyles((theme) => ({
    root: {
      'label + &': {
        marginTop: theme.spacing(2),
      },
    },
    input: {
      borderRadius: 4,
      position: 'relative',
      size: '40px auto',
      //backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
     
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  }))(InputBase);


const useStyles = makeStyles(theme => ({

    pageContent:{
        
        margin: theme.spacing(0.5),
        padding: theme.spacing(6),
        backgroundColor: '#efefef',
    },

    formControl: {
      
        minWidth: 165,
    },

    ST:{
        padding: theme.spacing(0.5),
    }

}));


export default function Agent() {

    
            const [SelectedDate, setSelectedDate] = React.useState(new Date());
            const [Nom, setNom]=React.useState("")
            const [Sexe, setSexe]=React.useState("")
            const [EtaCivil, setEtatCivil]=React.useState("")
            const [Adresse, setAdresse]=React.useState("")
            const [Contact, setContact]=React.useState("")
            const [Email, setEmail]=React.useState("")
            const [Pwd, setPwd]=React.useState("")
            const [Fonction, setFonction]=React.useState("")
            const [Specialite, setSpecialite]=React.useState("")
            const [Photo, setPhoto]=React.useState("")
            const [data, setData]=React.useState([])
            const [idpersonne, setIdPersonne]=React.useState()
            const [fils, setFils]=React.useState()

            let files="";

            const onChangers=(e)=>{
                files=e.target.files;
                console.log(files[0].name);
            }

            const Inserer=()=>{


            const Data=new FormData();
            Data.append("file", files[0])
            Data.append("nomcomplet",Nom)
            Data.append("sexe", Sexe)
            Data.append("datenaissance", SelectedDate)
            Data.append("constact", Contact)
            Data.append("etatcivil",EtaCivil)
            Data.append("adddress", Adresse)
            
            Data.append("password", Pwd) 
            Data.append("email", Email)
            Data.append("fonction", Fonction)
            Data.append("specialiter", Specialite)

            Axios.post("personne/save", Data)
            .then((xyk)=>{
                console.log(xyk.data)
            }).catch((error)=>{
                console.log(error.response.data)
            })

            }

            const handleDateChange = (date) => {
            setSelectedDate(date);
            };

            const classes = useStyles();

            React.useEffect(()=>{
               setTimeout(() => {
                Axios.get("personne").then((rslt)=>{
                    setData(rslt.data)
                    // console.log(rslt)
                }).catch((error)=>{})
               }, 2000);
            });

            const Updatess=(item)=>{

                setNom(item.tbpersonne.nomcomplet)
                setSexe(item.tbpersonne.sexe)
                setEtatCivil(item.tbpersonne.etacivil)
                setFonction(item.tbpersonne.fonction)
                setAdresse(item.tbpersonne.adddress)
                setContact(item.tbpersonne.constact)
                setEmail(item.tbpersonne.email)
                setPwd(item.tbpersonne.password)
                setSpecialite(item.tbpersonne.specialiter)
                setIdPersonne(item.idpersonne)
            
            }
            
            const forndata=new FormData();

            const UpdateAgent=()=>{
                try {
               
                forndata.append("file", fils[0]);
                forndata.append("specialiter", Specialite);
                forndata.append("fonction", Fonction);
                forndata.append("email", Email);
                forndata.append("adddress", Adresse);
                forndata.append("etatcivil", EtaCivil);
                forndata.append("constact", Contact);
                forndata.append("datenaissance", SelectedDate);
                forndata.append("sexe", Sexe);
                forndata.append("nomcomplet", Nom);
                forndata.append("idpersonne", idpersonne);

                Axios.put("personne/updateagent", forndata)
                .then((item)=>{
                    console.log(item.data)
                })
                .catch((error)=>{console.log(error)})
                } catch (error) {
                    
                }
            }

            const rows=data.map((item)=>{
                
                return{
                    nom:item.tbpersonne.nomcomplet,
                    sexe: item.tbpersonne.sexe,
                    contact:item.tbpersonne.constact,
                    etatcivil:item.tbpersonne.etatcivil,
                    adddress:item.tbpersonne.adddress,
                    email:item.tbpersonne.email,
                    fonction:item.fonction,
                    specialiter:item.specialiter,
                    password:item.password,
                    update:<IconButton onClick={()=>Updatess(item)} >
                           
                            <Update/>

                    </IconButton>,

                    imgx:<img src={"http://localhost:7070/"+item.tbpersonne.image}

                            style={{height:30, width:30, borderRadius:10}}
                            alt={item.tbpersonne.nomcomplet}
                    />
                }
            })
            
            const colum=[
                {
                    title:"Update",
                    field:"update"
                },
                {
                    title:"NOM",
                    field:"nom"
                },
                {
                    title:"SEXE",
                    field:"sexe"
                },
                {
                    title:"contact",
                    field:"contact"
                },
                {
                    title:"etatcivil",
                    field:"etatcivil"
                },
                {
                    title:"adddress",
                    field:"adddress"
                },
                {
                    title:"email",
                    field:"email"
                },
                {
                    title:"fonction",
                    field:"fonction"
                },
                {
                    title:"specialite",
                    field:"specialiter"
                },
                {
                    title:"Image",
                    field:"imgx"
                }
            ]


    return (
        <div>

            <Navbar />
            <Sidnav/>

            <Pageheader

                title ="Identification Agent"
                subtitle="Page Description"
                icon ={  <PersonIcon  /> }  

            />  

            <Paper className={classes.pageContent}>
                <Grid container>

                   
                    <Grid item sm={5} className={classes.ST}>

                        <TextField variant="outlined" name="Nom"  value={Nom} onChange={(e)=>setNom(e.target.value)} fullWidth size="small" label='Noms Complet' placeholder="Entrez votre nom complet" /> <br/><br/>
                        
                        <FormControl component="fieldset" >
                            
                            <FormLabel component="legend">Sexe</FormLabel>

                            <RadioGroup aria-label="Sexe" name="Sexe" value={Sexe} onChange={(e)=>setSexe(e.target.value)} style={{ display: 'initial' }}>
                                
                                <FormControlLabel value="Masculin"  control={<Radio />} label="Masculin" />  
                                <FormControlLabel value="Feminin" control={<Radio />} label="Féminin" />
                                
                            </RadioGroup>

                        </FormControl> 

                        <TextField variant="outlined" name="Adresse" value={Adresse}  onChange={(e)=>setAdresse(e.target.value)} size="small" fullWidth label='Adresse' placeholder="Entrez votre Adresse" /> <br/> <br/> 
                        <TextField variant="outlined" name="Contact"  value={Contact} onChange={(e)=>setContact(e.target.value)} size="small" fullWidth label='Contact' placeholder="Entrez votre Contact" /> <br/> <br/>
                        <TextField variant="outlined" name="Email" value={Email} onChange={(e)=>setEmail(e.target.value)} size="small" fullWidth label='E-mail' placeholder="Entrez votre mail" />  <br/> <br/>
                        <TextField variant="outlined" name="Pwd"  value={Pwd} type="password" onChange={(e)=>setPwd(e.target.value)} size="small" fullWidth label='Mot de passe' placeholder="Entrez votre mot de passe" /> <br/> <br/>


                    </Grid>

                    <Grid item sm={1}> <br/>                         </Grid>

                    <Grid item sm={5}>      

                   

                        <TextField
                                   
                                    variant="outlined"
                                    size="small"
                                    label="Date de Naissance"
                                    type="date"
                                    format="yyyy-MM-dd"
                                    //defaultValue="2021-09-09"
                                    name="SelectedDate"  
                                    value={SelectedDate} 
                                    onChange={(e)=>setSelectedDate(e.target.value)}
                                   
                                    InputLabelProps={{
                                    shrink: true,
                                    }}
                        /> <br/>

                        <FormControl>
                            <InputLabel htmlFor="demo-customized-select-native">Etat Civil</InputLabel>
                            <NativeSelect
                            id="demo-customized-select-native"
                            name="EtatCivil"
                            value={EtaCivil}
                            onChange={(e)=>setEtatCivil(e.target.value)}
                            input={<BootstrapInput />}
                            >
                                <option aria-label="None" value="" />
                                <option value="Célibataire">Célibataire</option>
                                <option value="Marié(e)">Marié(e)</option>
                                <option value="Divorcé(e)">Divorcé(e)</option>
                                <option value="Veuf(ve)">Veuf(ve)</option>
                                <option value="Separé(e)">Separé(e)</option>

                            </NativeSelect>
                        </FormControl> <br/> 

                       

                        <FormControl>
                            <InputLabel htmlFor="demo-customized-select-native">Fonction </InputLabel>
                            <NativeSelect
                            id="demo-customized-select-native"
                                name="Fonction"
                                value={Fonction}
                                onChange={(e)=>setFonction(e.target.value)}
                            input={<BootstrapInput />}
                            >
                                <option aria-label="None" value="" />
                                <option value="Infirmier">Infirmier</option>
                                <option value="Medecin">Medecin</option>
                                <option value="Laborantin">Laborantin</option>
                              

                            </NativeSelect>
                        </FormControl>
                        

                        <br/>  
                       
                        <FormControl>
                            <InputLabel htmlFor="demo-customized-select-native">Specialite </InputLabel>
                            <NativeSelect
                            id="demo-customized-select-native"

                            name="Specialite"
                            value={Specialite}
                            onChange={(e)=>setSpecialite(e.target.value)}

                            input={<BootstrapInput />}
                            >
                                <option aria-label="None" value="" />
                                <option value="Aucune">Aucune</option>
                                <option value="Generaliste">Generaliste</option>
                                <option value="Pediatre">Pediatre</option>
                                <option value="Churirgien">Churirgien</option>

                            </NativeSelect>
                        </FormControl>

                       
                       <br/>
                       <br/>
                   
                        <h4>Photo</h4>
                        <input type="file" name="file" onChange={(e)=>setFils(e.target.files)}/>
                        
                                                  
                        <br/> 
                        <br/>
                    
                        <div>
                                <Controls.Button
                                    
                                    text="Inserer"
                                    onClick={()=>Inserer()}
                                />

                                <Controls.Button
                                    
                                    text="Modifier"
                                    onClick={()=>UpdateAgent()}
                                    
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
                                                                       
                <Grid container>
                    
                    <Grid sm={12}>
                      
                    
                        <Tableau
                            title="Liste des Agent"
                            column={colum}
                            data={rows}
                        />


                    </Grid>

                </Grid>

            </Paper>

        </div>
    )
}

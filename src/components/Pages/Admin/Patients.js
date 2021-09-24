import React from 'react';
import Pageheader from './Pageheader';
import PeopleOutlineTwoToneIcon from "@material-ui/icons/PeopleOutlineTwoTone";
import { UserForm, Form} from './UserForm';
import Controls from '../../Controls/Controls';
import PersonIcon from "@material-ui/icons/Person";
import Sidnav from "./Header/Sidenav";
import Navbar from "./Header/Navbar";

import { 
    
    Grid, Paper, makeStyles, Avatar, Typography, TextField, Button, InputLabel,Checkbox, NativeSelect,
    MenuItem,FormControl, Select, Radio,RadioGroup,FormControlLabel,FormLabel,withStyles,InputBase, IconButton

} from '@material-ui/core';

import Axios from "../../../Axios/Axios";
import Tableau from "./Tableau";
import{ Update} from "@material-ui/icons/Update";


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

function Patients() {
    
            
            const [SelectedDate, setSelectedDate] = React.useState(new Date())
            const [Nom, setNom]=React.useState("")
            const [Sexe, setSexe]=React.useState("")
            const [EtaCivil, setEtatCivil]=React.useState("")
            const [Adresse, setAdresse]=React.useState("")
            const [Contact, setContact]=React.useState("")
            const [Email, setEmail]=React.useState("")
            const [Pwd, setPwd]=React.useState("")
            const [Allergie, setAllergie]=React.useState("")
            const [TypePatient, setTypePatient]=React.useState("")
           
            const [datadonne, setDatadonne]=React.useState([])
            const [Fichier, setFichier]=React.useState()
            const [idpersonne, setIdPersonne]=React.useState()

            let files="";

            const onChangers=(e)=>{
                files=e.target.files;
                console.log(files[0].name);
            }


            // Fonction de Modification du Patient

            // const MP=new FormData();

            // const ModifierPatient=(item)=>{
            //     try {
               
            //         MP.append("file", Fichier[0]);
            //         MP.append("email", Email);
            //         MP.append("adddress", Adresse);
            //         MP.append("etatcivil", EtaCivil);
            //         MP.append("constact", Contact);
            //         MP.append("datenaissance", SelectedDate);
            //         MP.append("sexe", Sexe);
            //         MP.append("nomcomplet", Nom);
            //         MP.append("idpersonne", idpersonne);
                 
            //     Axios.put("personne/updatepatient", MP)
            //     .then((item)=>{
            //         console.log(item.data)
            //     })
            //     .catch((error)=>{console.log(error)})
            //     } catch (error) {
                    
            //     }
            // }

            // Fonction d'Insertion du Patient
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
            Data.append("fonction", Allergie)
           

                    //   console.log(Data)

            Axios.post("personne/save", Data).then((xyk)=>{

                console.log(xyk.data)
            
            }).catch((error)=>{
                console.log(error.response.data)
            })

            }

            const handleDateChange = (date) => {
            setSelectedDate(date);
            };

            const classes = useStyles();
            

            // Chargement du tableau

            React.useEffect(()=>{
                try {
                  setTimeout(() => {
                    Axios.get("personne/allpatient").then((rslt)=>{
                        setDatadonne(rslt.data)
                        //console.log(rslt.data)
                    }).catch((error)=>{
                        console.log(error.response.data)
                    })
                  }, 2000);
                } catch (error) {
                    
                }
            })
           
        

            const rows=datadonne.map((item)=>{
                
                return{

                    nom:item.tbpersonne.nomcomplet,
                    sexe: item.tbpersonne.sexe,
                    contact:item.tbpersonne.constact,
                    etatcivil:item.tbpersonne.etatcivil,
                    adddress:item.tbpersonne.adddress,
                    email:item.tbpersonne.email,
                    alergies:item.allergie,
                    types: item.typepatient,
                    //Miseajour: <IconButton>  <Update/> </IconButton>,

                    imgx:<img src={"http://localhost:7070/"+item.tbpersonne.image}

                            style={{height:30, width:30, borderRadius:10}}
                            alt={item.tbpersonne.nomcomplet}
                    />

                }

            })

            const colum=[
                {
                    title:"Action",
                    field:"Miseajour"
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
                    title:"Alergies",
                    field:"alergies"
                },

                {
                    title:"Type",
                    field:"types"
                },

                {
                    title:"Image",
                    field:"imgx"
                }
               
            ]

    return (
        <>
            <Navbar />
            <Sidnav/>

            <Pageheader

                title ="Identification du patient"
                subtitle="Page Description"
                icon ={ <PersonIcon/> }  

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
                                <option aria-label="" value="" />
                                <option value="Célibataire">Célibataire</option>
                                <option value="Marié(e)">Marié(e)</option>
                                <option value="Divorcé(e)">Divorcé(e)</option>
                                <option value="Veuf(ve)">Veuf(ve)</option>
                                <option value="Separé(e)">Separé(e)</option>

                            </NativeSelect>
                        </FormControl> <br/> 

                       

                        <FormControl>
                            <InputLabel htmlFor="demo-customized-select-native">Type Patient </InputLabel>
                            <NativeSelect
                            id="demo-customized-select-native"
                                name="TypePatient"
                                value={TypePatient}
                                onChange={(e)=>setTypePatient(e.target.value)}
                            input={<BootstrapInput />}
                            >
                                <option aria-label="" value="" />
                                <option value="Abonne">Abonnee</option>
                                <option value="Prive">Prive</option>                            

                            </NativeSelect>
                        </FormControl>

                        <br/>
                        <br/>

                        <TextField variant="outlined" name="Allergie" value={Allergie}  onChange={(e)=>setAllergie(e.target.value)} size="small" fullWidth label='Medicament Allergique' placeholder="Entrez votre medicament Allergique" /> <br/> <br/>  
                          
                                   
                        <h4>Photo</h4>
                        <input type="file" name="file" onChange={(e)=>onChangers(e)}/>
                        
                                                  
                        <br/> 
                        <br/>
                    
                        <div>
                                <Controls.Button
                                    
                                    text="Inserer"
                                    onClick={()=>Inserer()}
                                />

                                <Controls.Button
                                    
                                    text="Modifier"
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
                        <h2> Tableau </h2>

                            <Tableau
                                title="Liste des Agent"
                                column={colum}
                                data={rows}
                               
                            />

                    </Grid>

                </Grid>

            </Paper>

            
        </>
    )
}

export default Patients;

import {useState} from "react"

export  const Etat=(props)=>{
    const [values, setValues]=useState(props);
    
    const Onchange=(evant)=>{
        const {value, name}=evant.target;
        setValues({
            ...values,
            [name]:value
        })
    }
    return {
        values,
        setValues,
        Onchange
    }
}
import React from 'react'
import { TextField} from '@material-ui/core';

export default function PwdInput(props) {

    const {name, label, value, error=null, onChange}=props;

    return (
            <TextField

                variant="outlined"
                type="password"
                label={label}
                name={name}
                value={value}
                onChange={onChange}
                {...(error && {error: true, helperText:error})}
            />
    )
}

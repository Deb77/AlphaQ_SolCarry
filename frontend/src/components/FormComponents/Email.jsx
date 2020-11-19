import React,{useState} from 'react';
import { FormControl, OutlinedInput } from '@material-ui/core';

const Email = ({email, setEmail}) => {
    const [invalidEmail, setInvalidEmail]= useState(false);

    const handleChange=(e)=>{
        let emailCheck= /\S+@\S+\.\S+/;
        setEmail(e.target.value.trim());
        setInvalidEmail(!emailCheck.test(e.target.value.trim()));
    }

    return (
        <FormControl>
            <OutlinedInput value={email} onChange={handleChange}
            label="Email" variant="outlined" />
        </FormControl>
    );
}

export default Email;
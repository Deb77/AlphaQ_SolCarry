import React,{useState} from 'react';
import TextField from '@material-ui/core/TextField';
import FormHelperText from '@material-ui/core/FormHelperText';

const Email = ({email, setEmail}) => {
    const [invalidEmail, setInvalidEmail]= useState(false);

    const handleChange=(e)=>{
        let emailCheck= /\S+@\S+\.\S+/;
        setEmail(e.target.value.trim());
        setInvalidEmail(!emailCheck.test(e.target.value.trim()));
    }

    return (
        <>
        <TextField value={email} onChange={handleChange}
        label="Email" variant="outlined" />
        {
            invalidEmail?
            <FormHelperText error>
                Please Enter a valid email
            </FormHelperText>:null    
        }
        </>
    );
}

export default Email;
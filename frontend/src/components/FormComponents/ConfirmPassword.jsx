import React,{useState} from 'react';

import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import {ReactComponent as Visibility} from '../../Assets/visibility-black-18dp.svg';
import {ReactComponent as VisibilityOff} from '../../Assets/visibility_off-black-18dp.svg';
import FormHelperText from '@material-ui/core/FormHelperText';

const ConfirmPassword = ({Cpassword}) => {
    const [showPassword,setShowPassword]= useState(false);
    const [password,setPassword]= useState('');
    const [passwordNotMatching,setPasswordNotMatching]= useState(false);

    const handleChange=(e)=>{
        setPassword(e.target.value.trim())
        if(e.target.value.trim()!==Cpassword)
            setPasswordNotMatching(true)
        else
            setPasswordNotMatching(false)
    }

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    };
    const handleMouseDownPassword = (event) => {
    event.preventDefault();
    };

    return (
        <FormControl disabled={Cpassword===''}>
            <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={handleChange}
            endAdornment={
                <InputAdornment position="end">
                <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
                </InputAdornment>
            }
            labelWidth={70}
            />
            {
            passwordNotMatching?
            <FormHelperText error>
                Please Enter the same Password 
            </FormHelperText>:null    
            }
        </FormControl>
    );
}

export default ConfirmPassword;
import React,{useState} from 'react';

import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import {ReactComponent as Visibility} from '../../Assets/visibility-black-18dp.svg';
import {ReactComponent as VisibilityOff} from '../../Assets/visibility_off-black-18dp.svg';

const Password = ({password,setPassword}) => {
    const [showPassword,setShowPassword]= useState(false);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    };
    const handleMouseDownPassword = (event) => {
    event.preventDefault();
    };

    return (
        <FormControl variant="outlined">
            <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e)=>setPassword(e.target.value.trim())}
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
        </FormControl>
    );
}

export default Password;
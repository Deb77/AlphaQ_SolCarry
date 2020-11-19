import React from 'react';
import TextField from '@material-ui/core/TextField';

const Name = ({name, setName}) => {
    return (
        <TextField value={name} onChange={(e)=>setName(e.target.value.trim())}
        id="outlined-basic" label="Name" variant="outlined" />
    );
}

export default Name;
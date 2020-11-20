import React from 'react';
import { FormControl, OutlinedInput } from '@material-ui/core';

const Name = ({name, setName}) => {
    return (
        <FormControl>
        <OutlinedInput value={name} onChange={(e)=>setName(e.target.value.trim())}
        label="Name" variant="outlined" />
        </FormControl>
    );
}

export default Name;
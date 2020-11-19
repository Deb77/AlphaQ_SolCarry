import React from 'react';

import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { styled } from '@material-ui/core';

const CustomSelect= styled(Select)({
    height: '56px',
    '& .MuiSelect-root':{
        paddingLeft: '15px'
    },
    '&.MuiInput-underline:hover:not(.Mui-disabled):before':{
        border: '0',
    },
    '&.MuiInput-underline:before':{
        borderBottom: '0',        
    }
});

//MuiInput-underline:hover:not(.Mui-disabled):before .MuiInput-underline:before
const TypeSelect = () => {
    return (
        <FormControl>
        <CustomSelect
          labelId="demo-simple-select-label"
          id="demo-simple-select"
        >
          <MenuItem value={'Restaurant'}>Restaurant</MenuItem>
          <MenuItem value={'HomeChef'}>HomeChef</MenuItem>
          <MenuItem value={'Grocery'}>Grocery</MenuItem>
          <MenuItem value={'Other'}>Other</MenuItem>
        </CustomSelect>
      </FormControl>
    );
}

export default TypeSelect;
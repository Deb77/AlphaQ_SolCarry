import React from 'react';
import TextField from '@material-ui/core/TextField';
import ImageUploader from '../AssociateRegistration/ImageUpload';

import { styled } from '@material-ui/core/styles';

const Button = styled('button')({
  width: '300px',
  height: '45px',
  fontFamily: 'weasthood',
  fontSize: '22px',
  letterSpacing: '2px',
  borderRadius: '30px',
  margin: '40px 0',
  border: '0',
  outline: '0',
  backgroundColor: '#3F50B5',
  color: '#fff',
  boxShadow: '0px 4px 15px 0px rgba(0,0,0,0.25)'
});


const Div = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems:'center'
})

const AddMenuItem = ({handleSubmit}) => {
    return (
        <Div>
        <TextField
          id="standard-number"
          label="Dish Name"
          type="Text"
        />
        <TextField
          id="standard-number"
          label="Price"
          type="number"
        />
        <ImageUploader />
        <Button onClick={handleSubmit}>
          Submit
        </Button>
        </Div>
    );
}

export default AddMenuItem;
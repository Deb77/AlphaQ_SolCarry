import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Map from '../SelectLocationOnMap/Map';
import Password from '../FormComponents/Password';
import ConfirmPassword from '../FormComponents/ConfirmPassword';
import Email from '../FormComponents/Email';
import Name from '../FormComponents/Name';
import { Button } from '@material-ui/core';
import {ReactComponent as MockMobile} from '../../Assets/signup.svg';
import TypeSelect from './TypeSelect';
import ImageUpload from './ImageUpload';
import Axios from 'axios';


const useStyles= makeStyles({
    container:{
        display: 'grid',
        gridTemplateColumns: '40% 60%',
        marginBottom: '10px',
        backgroundColor: '#E17E51'
    },
    leftContainer:{
        display: 'grid',
        gridTemplateColumns: '100%',
        gridRowGap:'10px',
        height: '300px',
        paddingTop: '20px',
    },
    details:{
        display: 'grid',
        gridTemplateColumns: '100%',
        gridRowGap: '10px',
        margin: 'auto',
        width: '400px',
        '& .MuiFormControl-root':{
            boxSizing: 'border-box',
            backgroundColor: '#fff',
            borderRadius: '40px',
            padding: '0px'
        },
        '& .MuiOutlinedInput-notchedOutline':{
            border:'0px'
        },
        '& .MuiFormLabel-root':{
            paddingLeft: '15px'
        },
        '& p':{
            margin: '0',
            fontWeight: '500',
            paddingLeft: '20px'
        }
    },
    heading:{
        fontWeight: '400',
        fontSize: '36px',
        textAlign: "center",
    },
    submitButton:{
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
    },
    infoContainer:{
        display: 'flex',
        width: '100%',
        maxWidth: '1100px',
        margin: 'auto',
        marginLeft: '104px',
        marginRight: '30px',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'space-between',
        gridColumnGap: '5%',
        '& p':{
            fontSize: '36px',
        },
        '& span':{
            fontFamily: 'weasthood',
            letterSpacing: '2px',
            color: '#E17E51',
        }
    },
    svg:{
        width: '450px',
        height: '450px'
    },
    input2:{
        display: 'grid',
        gridTemplateColumns: '70% 30%',
        gridColumnGap: '5%',
    }
});

const AssociateRegistration = ({mapStatus}) => {
    const [location, setLocation]= useState({
        lat: 15.292158,
        lng: 73.969542
    });
    const [name,setName]= useState('');
    const [type,setType]= useState('');
    const [email,setEmail]= useState('');
    const [password,setPassword]= useState('');
    const [imgageUrl,setImgageUrl]= useState('');
    const [error,setError]= useState(false);

    const handleSubmit=()=>{
        Axios.post('https://solcarry-backend.herokuapp.com/business/signup',{
            name,email,password,type,
            lat: location.lat.toString(),
            long: location.lng.toString(),
            image: imgageUrl
        })
        .then((response)=>{
            console.log(response.data.token, response.data.user)
        })
        .catch((error)=>{
            alert("Something went wrong")
        })
    };

    const styles= useStyles();
    return (
        <>
            <h1 className={styles.heading}>Welcome Future <br/> Business Associate</h1>
            <div className={styles.container}>
                <div className={styles.leftContainer}>
                    <div className={styles.details}>
                        <p>Name</p>
                        <Name name={name} setName={setName} />
                        <p>Email</p>
                        <Email email={email} setEmail={setEmail} />
                        <p>Password</p>
                        <Password password={password} setPassword={setPassword} />
                        <p>Confirm Password</p>
                        <ConfirmPassword Cpassword={password} />
                        <p>Business Type</p>
                        <div className={styles.input2}>
                            <TypeSelect type={type} setType={setType} />
                            <ImageUpload setImgageUrl={setImgageUrl} />
                        </div>
                        <button onClick={handleSubmit}
                        className={styles.submitButton} //variant="contained" color="primary">
                         >   Submit
                        </button>
                    </div>
                </div>
                <div className={styles.rightContainer}>
                {
                mapStatus?
                <Map location={location} setLocation={setLocation} height='600px' />:
                <h1>Loading</h1>
                }
                </div>
            </div>
            <div className={styles.infoContainer}>
                <p>
                    Register with <span>Solcarry</span> and take your business to the next level.<br/>
                    Online Delivery Platform tailored for the goan market.
                </p>
                <MockMobile className={styles.svg}/>
            </div>
        </>
    );
}

export default AssociateRegistration;
import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

import Map from '../SelectLocationOnMap/Map';
import Password from '../FormComponents/Password';
import ConfirmPassword from '../FormComponents/ConfirmPassword';
import Email from '../FormComponents/Email';
import Name from '../FormComponents/Name';
import { Button } from '@material-ui/core';
import {ReactComponent as MockMobile} from '../../Assets/signup.svg';
import TypeSelect from './TypeSelect';

import Axios from 'axios';


const useStyles= makeStyles({
    container:{
        display: 'grid',
        marginBottom: '10px',
        backgroundColor: '#E17E51',
        width: '500px',
    },
    leftContainer:{
        display: 'grid',
        gridTemplateColumns: '100%',
        gridRowGap:'10px',
        height: '500px',
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
            borderRadius: '2px',
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
            paddingLeft: '1px'
        },
        input2:{
            width: '100%',
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
        borderRadius: '5px',
        margin: '20px 0',
        border: '0',
        outline: '0',
        backgroundColor: '#3F50B5',
        marginLeft: 45,
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
    
});

const Login = ({}) => {
    const history = useHistory();
    const [name,setName]= useState('');
    const [type,setType]= useState('User');
    const [email,setEmail]= useState('');
    const [password,setPassword]= useState('');
    
    const handleSubmit=()=>{
        if (type === "User"){
        Axios.post('https://solcarry-backend.herokuapp.com/customer/login',{
            name,email,password
        })
        .then((response)=>{
            console.log(response.data)
            localStorage.setItem("user", JSON.stringify(response.data));
            history.push("/");
            history.go(0)
        })
        .catch((error)=>{
            alert(error)
        })}
        else if (type === "Associate"){
            Axios.post('https://solcarry-backend.herokuapp.com/business/login',{
            name,email,password
        })
        .then((response)=>{
            console.log(response.data.token, response.data.user)
            localStorage.setItem("user", JSON.stringify(response.data));
            history.push("/restaurant-portal");
            history.go(0)
        })
        .catch((error)=>{
            alert(error)
        })
        }
        else if (type === "Delivery"){
            Axios.post('https://solcarry-backend.herokuapp.com/driver/login',{
            name,email,password
        })
        .then((response)=>{
            console.log(response.data.token, response.data.user)
            localStorage.setItem("user", JSON.stringify(response.data));
            history.push("/driverPortal");
            history.go(0)
        })
        .catch((error)=>{
            alert("Something went wrong")
        })}
        
    };

    const styles= useStyles();
    return (
        <>
            <div className={styles.container}>
                <div className={styles.leftContainer}>
                    <div className={styles.details}>
                        <p>Name</p>
                        <Name name={name} setName={setName} />
                        <p>Email</p>
                        <Email email={email} setEmail={setEmail} />
                        <p>Password</p>
                        <Password password={password} setPassword={setPassword} />
                        <p>Designation</p>
                        <div className={styles.input2}>
                            <TypeSelect type={type} setType={setType} />
                        </div>
                        <button onClick={handleSubmit}
                        className={styles.submitButton} //variant="contained" color="primary">
                         >   Submit
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
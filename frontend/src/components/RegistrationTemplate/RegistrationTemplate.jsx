import React from 'react';
import { makeStyles, StylesProvider } from '@material-ui/core/styles';
import Name from '../FormComponents/Name';
import Password from '../FormComponents/Password';
import ConfirmPassword from '../FormComponents/ConfirmPassword';
import Email from '../FormComponents/Email';

import  {ReactComponent as DriverReg} from '../../Assets/driver-reg-icon.svg';
import  {ReactComponent as UserReg} from '../../Assets/web-page.svg';

const useStyles= makeStyles({
    container: {
        display: 'flex',
       justifyContent: 'space-evenly',
       alignItems: 'center',
       margin: '40px',
       marginRight: '400px'
    },
    svg:{
        width: '800px'
    },
    inputContainer: {
        width: '400px',
        '& .MuiFormControl-root':{
            boxSizing: 'border-box',
            backgroundColor: '#fff',
            borderRadius: '40px',
            padding: '0px',
            border: '0.01px solid rgba(0,0,0,0.25)',
            width: '100%'
        },
        '& .MuiOutlinedInput-notchedOutline':{
            border:'0px'
        },
        '& .MuiFormLabel-root':{
            paddingLeft: '15px'
        },
        '& p':{
            fontWeight: '500',
            paddingLeft: '20px'
        }
    },
    heading:{
        fontSize: '36px',
        fontWeight: '400'
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
});

const RegistrationTemplate = ({type, text, name,setName, email,setEmail, password,setPassword, handleSubmit }) => {

    const styles= useStyles();
    return (
        <div className={styles.container}>
            {
                type==='user'?
                <UserReg  className={styles.svg} />:
                <DriverReg className={styles.svg} />
            }
            <div className={styles.inputContainer}>
                <h2 className={styles.heading}>{text}</h2>
                <label>
                    <p>Name</p>
                    <Name name={name} setName={setName} />
                </label>
                <label>
                    <p>Email</p>
                    <Email email={email} setEmail={setEmail} />
                </label>
                <label>
                    <p>Password</p>
                    <Password password={password} setPassword={setPassword} />
                </label>
                <label>
                    <p>Confirm Password</p>
                    <ConfirmPassword Cpassword={password} />
                </label>
                <button onClick={handleSubmit}
                className={styles.submitButton} //variant="contained" color="primary">
                    >   Submit
                </button>
            </div>
        </div>
    );
}

export default RegistrationTemplate;
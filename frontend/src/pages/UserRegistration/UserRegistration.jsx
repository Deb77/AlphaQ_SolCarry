import React,{useState} from 'react';
import RegistrationTemplate from '../../components/RegistrationTemplate/RegistrationTemplate';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const UserRegistration = () => {
    const history = useHistory();
    const [name,setName]= useState('');
    const [email,setEmail]= useState('');
    const [password,setPassword]= useState('');

    const handleSubmit= ()=>{
        if(name==='')
            alert("Name cannot be blank")
        else if(email==='')
            alert("Email cannot be blank")
        else if(password==='')
            alert("Password cannot be blank")
        else{
            axios.post('https://solcarry-backend.herokuapp.com/customer/signup',{
                name,email,password
            })
            .then((response)=>{
                localStorage.setItem("type", "User");
                localStorage.setItem("user", JSON.stringify(response.data));
                history.push("/");
            })
            .catch(()=>{
                alert('Somethign went wrong')
            });
        }
    };

    return (
        <RegistrationTemplate 
        handleSubmit={handleSubmit}
        text="Shop from local Businesses."
        name={name} setName={setName}
        password={password} setPassword={setPassword}
        email={email} setEmail={setEmail}
        type='user' />
    );
}

export default UserRegistration;
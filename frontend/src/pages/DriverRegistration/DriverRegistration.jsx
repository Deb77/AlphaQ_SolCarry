import React,{useState} from 'react';
import RegistrationTemplate from '../../components/RegistrationTemplate/RegistrationTemplate';
import GetUserLocation from '../../components/SelectLocationOnMap/GetUserLocation'
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const DriverRegistration = () => {
    const history = useHistory();
    const [name,setName]= useState('');
    const [email,setEmail]= useState('');
    const [password,setPassword]= useState('');
    const [location, setLocation]= useState({
        lat: 15.292158,
        lng: 73.969542
    });

    const handleSubmit= ()=>{
        if(name==='')
            alert("Name cannot be blank")
        else if(email==='')
            alert("Email cannot be blank")
        else if(password==='')
            alert("Password cannot be blank")
        else{
            axios.post('https://solcarry-backend.herokuapp.com/driver/signup',{
                name,email,password,
                lat: location.lat.toString(),
                long: location.lng.toString(),
            })
            .then((response)=>{
                localStorage.setItem("type", "Delivery");
                localStorage.setItem("user", JSON.stringify(response.data));
                history.push("/driverPortal");
            })
            .catch(()=>{
                alert('Somethign went wrong')
            });
        }
    };

    return (
        <>
        <GetUserLocation setCurrentLocation={setLocation} />
        <RegistrationTemplate 
        handleSubmit={handleSubmit}
        text="Become a Delivery Associate, Today!"
        name={name} setName={setName}
        password={password} setPassword={setPassword}
        email={email} setEmail={setEmail}
        type="driver" />
        </>
    );
}

export default DriverRegistration;
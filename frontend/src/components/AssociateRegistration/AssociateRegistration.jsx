import React,{useState} from 'react';
import Map from '../SelectLocationOnMap/Map';
import Password from '../FormComponents/Password';
import ConfirmPassword from '../FormComponents/ConfirmPassword';
import Email from '../FormComponents/Email';
import Name from '../FormComponents/Name';

const AssociateRegistration = ({mapStatus}) => {
    const [location, setLocation]= useState({
        lat: 15.292158,
        lng: 73.969542
    });
    const [name,setName]= useState('');
    const [email,setEmail]= useState('');
    const [password,setPassword]= useState('');
    const [error,setError]= useState(false);

    return (
        <div>
            <h1>Welcome Future <br/> Business Associate</h1>
            <Name name={name} setName={setName} />
            <Email email={email} setEmail={setEmail} />
            <Password password={password} setPassword={setPassword} />
            <ConfirmPassword Cpassword={password} />
            {
                mapStatus?
                <Map location={location} setLocation={setLocation} />:
                <h1>Loading</h1>
            }
        </div>
    );
}

export default AssociateRegistration;
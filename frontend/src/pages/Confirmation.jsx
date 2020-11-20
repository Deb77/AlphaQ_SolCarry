import React from 'react';
import {ReactComponent as Hooray} from '../Assets/confirmation.svg';
import Navbar from '../components/navbar';


const Confirmation = () => {
    return (
        <>
        <Navbar />
        <div style={{position: 'absolute' ,left: '50%', transform: 'translateX(-50%)'}} >
            <Hooray />
        </div>
        </>
    );
}

export default Confirmation;
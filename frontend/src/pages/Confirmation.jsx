import React,{useEffect} from 'react';
import { ReactComponent as Hooray } from '../Assets/confirmation.svg';
import axios from 'axios';
import Navbar from '../components/navbar';


const Confirmation = () => {
    useEffect(() => {
        axios.post("https://solcarry-backend.herokuapp.com/email")
            .then(res => console.log(res));
    }, [])

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
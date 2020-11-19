import React,{useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import Map from './Map';

const useStyles= makeStyles({
    container:{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    heading: {
        fontFamily: 'weasthood',
        fontSize: '48px',
        textAlign: 'center',
        letterSpacing: '2px',
        margin: '10px auto'
    },
    details:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '5px 10px'
    },
    subHeading:{
        fontWeight: '400',
        fontSize: '18px',
        margin: '0'
    },
    roundedButton:{
        borderRadius: '36px'
    },
    details2:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'felx-start',
        margin: '5px 10px'
    },
    submitButton:{
        width: '275px',
    },
    lastUpdated:{
        margin: '10px 0',
        fontWeight: '500'
    }
});

const DriverPortal = ({ mapStatus }) => {
    const [name, setName]= useState('Benito');
    const [location, setLocation]= useState({
        lat: 15.292158,
        lng: 73.969542
    });

    const styles= useStyles();
    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>{`Hi,${name}`}</h1>
            <div className={styles.details}>
                <h3 className={styles.subHeading}>Welcome, fellow Delivery Associate</h3>
                <Button className={styles.roundedButton} variant="outlined" color="primary">
                    Logout
                </Button>
            </div>
            {
                mapStatus?
                <Map location={location} setLocation={setLocation} />:
                <h1>Loading</h1>
            }
            <div className={styles.details2}>
                <Button className={styles.submitButton} variant="contained" color="primary">
                    Update Location
                </Button>
                <p className={styles.lastUpdated}>Last update at 21:00 on 13/03/2020</p>
            </div>
        </div>
    );
}

export default DriverPortal;
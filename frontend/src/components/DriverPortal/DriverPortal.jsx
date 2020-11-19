import React,{useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import Map from '../SelectLocationOnMap/Map';

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
    },
    smallText:{
        margin: '0',
        fontSize: '11px'
    }
});

const DriverPortal = ({ mapStatus }) => {
    const [name, setName]= useState('Benito');
    const [updatedTime, setUpdatedTime]= useState(new Date() );
    const [location, setLocation]= useState({
        lat: 15.292158,
        lng: 73.969542
    });

    const handleLocationUpdate= ()=>{
        if(!mapStatus){ //map not initialised yet
            return null
        }
        let geocoder= new window.google.maps.Geocoder();
        geocoder.geocode({location},(result, status)=>{
            if(status !=='OK')
                alert('Something went wrong')
            else{
                var r = new RegExp(' Goa ');
                if(r.test(result[0].formatted_address)){
                    setUpdatedTime(new Date());
                    //api call
                }
                else{
                    alert('Please select a location within Goa')
                }
            }
        })
    }

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
                <Button onClick={handleLocationUpdate}
                className={styles.submitButton} variant="contained" color="primary">
                    Update Location
                </Button>
                <p className={styles.lastUpdated}>
                    {
                    `Last update at\
                    ${updatedTime.getHours().toLocaleString('en-IN', {minimumIntegerDigits: 2, useGrouping:false})}:${updatedTime.getMinutes().toLocaleString('en-IN', {minimumIntegerDigits: 2, useGrouping:false})}\
                    on ${updatedTime.getDate().toLocaleString('en-IN', {minimumIntegerDigits: 2, useGrouping:false})}/${(updatedTime.getMonth() + 1).toLocaleString('en-IN', {minimumIntegerDigits: 2, useGrouping:false})}/${updatedTime.getFullYear().toLocaleString('en-IN', {minimumIntegerDigits: 2, useGrouping:false})}`
                    }
                </p>
                <p className={styles.smallText}>(Drop a marker at your current location)</p>
            </div>
        </div>
    );
}

export default DriverPortal;
import React,{useEffect, useState} from 'react';
import { GoogleMap, Marker } from "@react-google-maps/api"

const Map = ({location, setLocation}) => {
    const [currentLocation, setCurrentLocation]= useState({
        lat: 15.292158,
        lng: 73.969542
    });

    useEffect(()=>{ //Get user current Location
        if ( navigator.geolocation ) {
            navigator.geolocation.getCurrentPosition(
                getLocation,
                handleLocationError,
                { maximumAge: 1500000, timeout: 0 }
            );
        }          
    },[]);

    /* Geolocation api to get nearby airports logic */
    const getLocation= (position)=>{
        setCurrentLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
        })
    };

    function handleLocationError(error) {
        if(error.code===3)
            // timeout was hit, meaning nothing's in the cache
            // now let's make a non-cached request to get the actual position
            navigator.geolocation.getCurrentPosition(getLocation, handleLocationError);
    };

    const handleClick= (e)=>{
        console.log(e);
    }

    return (
        <GoogleMap
        onClick={handleClick}
        zoom= {5}
        mapContainerStyle={{height:'500px', width: '100%'}}
        center={currentLocation}>
            <Marker position={location} />
        </GoogleMap>
    );
}

export default Map;
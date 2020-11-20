import React,{useEffect} from 'react';
import { useLoadScript } from "@react-google-maps/api"

const libraries = ["places"];
const GOOGLE_API_KEY= "AIzaSyAX5oDs8RabZB7o1H1OJvPkENC3ugJhsZU";

const GoogleMapsWrapper = ({setMapStatus}) => {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: GOOGLE_API_KEY,
        libraries: libraries,
    });

    useEffect(()=>{
        console.log(isLoaded)
        setMapStatus(isLoaded)
    },[isLoaded])

    return (null);
}

export default GoogleMapsWrapper;
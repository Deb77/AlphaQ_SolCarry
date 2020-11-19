import React from 'react';
import { useLoadScript } from "@react-google-maps/api"

const libraries = ["places"];
const GOOGLE_API_KEY= "AIzaSyAX5oDs8RabZB7o1H1OJvPkENC3ugJhsZU";

const GoogleMapsWrapper = () => {
    useLoadScript({
        googleMapsApiKey: GOOGLE_API_KEY,
        libraries: libraries,
    })

    return (null);
}

export default GoogleMapsWrapper;
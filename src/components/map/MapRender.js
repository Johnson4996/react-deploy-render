
//Renders Map from google maps API
import React, { useContext, useEffect, useState } from 'react';
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api"
import Settings from "../Settings"
import mapSyles from "./MapStyles"
import { LogContext } from '../divelog/DiveLogProvider';

export const MapRender =(props) => {
    const {diveLogs} = useContext(LogContext)
    const [latLong, setLatLong] = useState()
    

    
    useEffect(()=>{
        //Taking the logs and running them through API to get lat and lng for each location 
        let latLongs = []
        diveLogs.map(dl =>{
            return fetch(`http://api.positionstack.com/v1/forward?access_key=${Settings.posKey}&query=${dl.location}&limit=1
            `)
                .then(res => res.json())
                .then(parsedRes => {
                    setLatLong( prevLatLongs => [...prevLatLongs ,parsedRes.data[0]] )
                    
                  })


        })
        setLatLong(latLongs)
        console.log(latLong)
    },[diveLogs])





    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: Settings.mapsKey
    })

    const mapContainerStyle = {
        width: '35rem',
        height: '22rem',
        margin: 'auto'
        
    }

    const center = {
        lat: 20.379131,
        lng: -20
    }

    const options = {
        styles: mapSyles,
        disableDefaultUI: true
    }


    
    if (loadError) console.log("error loading maps")
    if (!isLoaded) return "Loading..."

    return (
        <div className="map">
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                options={options}
                zoom={2}
                center={center}
            >
                
                {
                    //this is where I map through the state variable
                    latLong.map(l =>(
                     <Marker key={l.lat}
                         position ={{lat: l.latitude, lng: l.longitude}} 
                         />
                    ))
                }
            </GoogleMap>
        </div>
    )
}


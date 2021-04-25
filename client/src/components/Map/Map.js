import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker} from '@react-google-maps/api';
import mapStyles from './mapStyles.js';

export const MapContainer = () => {

  const [ currentPosition, setCurrentPosition ] = useState({});
  
  const success = position => {
    const currentPosition = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    }
    setCurrentPosition(currentPosition);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  })

  const options = {
    styles: mapStyles,
    disableDefaultUI: true,
    zoomControl: true,
  };

  const onMarkerDragEnd = (e) => {
    const lat = e.latLng.lat();
    const lng = e.latLng.lng();
    setCurrentPosition({ lat, lng})
  };
  
  const mapSize = {        
    height: "100vh",
    width: "100%"};
  
  const defaultCenter = {
    lat: 40.75, lng: -73.97
  }
  
  return (
     <LoadScript googleMapsApiKey='AIzaSyCyxlzFEbo5T--hz572BoW0NYxkujEzn_s'>
        <GoogleMap
          mapContainerStyle={mapSize}
          zoom={12}
          options={options}
          center={currentPosition}>
            {
            currentPosition.lat ? 
            <Marker
            position={currentPosition}
            onDragEnd={(e) => onMarkerDragEnd(e)}
            draggable={true} /> :
            null
          }
     </GoogleMap>
     </LoadScript>
  )
}

export default MapContainer;

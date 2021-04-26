import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker} from '@react-google-maps/api';
import mapStyles from './mapStyles.js';
import { usePosition } from 'use-position';
import Axios from 'axios';

export const MapContainer = () => {
  // require('dotenv').config()

  const [ currentPosition, setCurrentPosition ] = useState({
    lat: 40.75, lng: -73.97
  });

  const [items, setItems] = useState([])
  
  const success = position => {
    console.log('Scucress aheppening ??', position)
    const currentPosition = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    }
    setCurrentPosition(currentPosition);
  };
  const err = error => {
    console.log('Err!!!'. error)
  }

  useEffect(() => {

    Axios.get('/allItems').then(function(items) {
      console.log('AL ITEMS FROM DB', items)
      setItems(items.data)

    })
    // navigator.geolocation.getCurrentPosition(success, err)
    // var id = navigator.geolocation.watchPosition(success)
    // console.log('id geocord e', id)
    
  }, [])
  


  const options = {
    styles: mapStyles,
    disableDefaultUI: true,
    zoomControl: true,
  };

  const onMarkerDragEnd = (e) => {

    const lat = e.latLng.lat();
    const lng = e.latLng.lng();

    console.log('DRAG LAT AND LONG', lat, lng)
    setCurrentPosition({ lat, lng})
  };
  
  const mapSize = {        
    height: "100vh",
    width: "100%"};
  
  const defaultCenter = {
    lat: 40.75, lng: -73.97
  }

  // const { REACT_APP__GOOGLE_MAPS_API_KEY } = process.env;
  
  console.log('items ARRAY form db', items)
  return (
    <div>
      
     <LoadScript googleMapsApiKey = {'AIzaSyCyxlzFEbo5T--hz572BoW0NYxkujEzn_s'}>
        <GoogleMap
          mapContainerStyle={mapSize}
          zoom={12}
          options={options}
          center={defaultCenter}
          // onClick={(event) => {
            
          //   setMarkers(current => [
          //     ...current, 
          //     {
          //     lat: event.latlng.lat(),
          //     lng: event.latlng.lng(),
          //     time: new Date()
            
          //   },
          // ]);
          // }}
          
          >
            {items.map((singleItem)=>{
              console.log('ITMES LOOP HAPPENING!!')
              return (
                <Marker
            position={{lat: singleItem.location.lat, lng: singleItem.location.lng}}
            onDragEnd={(e) => onMarkerDragEnd(e)}
            draggable={true} />
              )
            })}
            
            {
            // currentPosition.lat ? 
            // <Marker
            // position={currentPosition}
            // onDragEnd={(e) => onMarkerDragEnd(e)}
            // draggable={true} /> :
            // null
          }
     </GoogleMap>
     </LoadScript>
     </div>
  )
}

export default MapContainer;

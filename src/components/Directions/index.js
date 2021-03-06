import React from 'react';
import MapViewDirections from 'react-native-maps-directions'

const GOOGLE_MAPS_APIKEY = 'AIzaSyDzqc1dyShJJRsnSTaYBTNtTd_gi2KrqG0';

const Directions = ({destination, origin, onReady}) => ( 
    <MapViewDirections
        origin={origin}
        destination={destination}
        apikey={GOOGLE_MAPS_APIKEY}
        onReady={onReady}   
        strokeWidth={4}
        strokeColor="#666699"
    />
)

export default Directions;

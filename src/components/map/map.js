import React, { useRef, useEffect, useState } from 'react';
import { fetchData } from '../../api'
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import './map.css';

export default function Map({zipCode}) {
  console.log('yes!', zipCode)
  const [breweries, setBreweries] = useState([])
  const [lng, setLongitude] = useState('')
  const [lat
    , setLatitude] = useState('')
  const mapContainer = useRef(null);git
  const map = useRef(null);
  // const [lng] = useState('139.7525');
  // const [lat] = useState('35.684');
  const [zoom] = useState(14);
  const [API_KEY] = useState('AD8nikL3oJEcHdgB90IS');
  const [networkError, setNetworkError] = useState(false)


  const getLocation = async () => {
    try {
      const data = await fetchData(zipCode)
      setBreweries(data)
      console.log('breweries' , breweries)
      setNetworkError(false)
    } catch (error) {
      console.error(error)
      setNetworkError(true)
    }
  }

  //get long/lat from each passed array to pass dynamically to map 

  useEffect(() => {
    if (map.current) return; //stops map from intializing more than once
    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${API_KEY}`,
      center: [lng, lat], //array of array... what is center
      zoom: zoom
    });
    map.current.addControl(new maplibregl.NavigationControl(), 'top-right');
    new maplibregl.Marker({color: "#FF0000"})
    .setLngLat([139.7525,35.6846]) //make dynamic
    .addTo(map.current);
  });


  return (
    <div className="map-wrap">
      <div ref={mapContainer} className="map" />
    </div>
  );
}

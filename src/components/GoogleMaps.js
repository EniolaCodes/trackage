import React, { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

export default function GoogleMaps() {
  const mapRef = useRef(null);

  useEffect(() => {
    const initializeMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY,
        version: 'quarterly',
      });

      const { Map } = await loader.importLibrary('maps');

      const locationInMap = {
        lat: 6.52437930,
        lng: 3.37920570,
      };

      // Marker (optional, if you want to display a marker)
      const { Marker } = await loader.importLibrary('marker');

      const options = {
        center: locationInMap,
        zoom: 15,
        mapId: 'NEXT_MAPS_TUTS',
      };

      const map = new Map(mapRef.current, options);

      // Add marker (optional)
      const marker = new Marker({
        map: map,
        position: locationInMap,
      });
    };

    initializeMap();
  }, []);

  return (
    
    <>
  <div className="h-96" ref={mapRef} />
    </>
     
  );
}

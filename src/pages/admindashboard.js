import React, { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import Adminlayout from './adminlayout'
import Link from 'next/link'
import GoogleMaps from '@/components/GoogleMaps'


const Admindashboard = () => {
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
    <Adminlayout>
          <div className="flex flex-col">
        <div className="flex justify-end mb-12 mt-5">
          <input
      type="text"
      placeholder="Input Tracking Id"
      className="border border-gray-300 rounded-md px-4 py-2 mr-2 text-sm"
    />
    <button className="bg-blue-500 text-lg text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600" >
      Search
    </button>
  </div>
      
        <div className="flex flex-col md:flex-row justify-between mb-12">
       
          <Link href="/orders" className="flex-1 text-lg text-center items-center bg-blue-100 border-t border-b p-4 rounded-md mb-4 mr-0 md:mr-4 md:mb-0">
            <p>Active Orders</p>
            <p>48</p>
          </Link>
          <Link href="/packagemanagement" className="flex-1 text-lg text-center bg-blue-500 border-t border-b p-4 rounded-md mb-4 mr-0 md:mr-4 md:mb-0">
            <p>Pending Orders</p>
            <p>41</p>
          </Link>
          <Link href="/packagemanagement" className="flex-1 text-lg text-center bg-red-400 border-t border-b p-4 rounded-md mb-4 mr-0 md:mr-4 md:mb-0">
            <p>Rejected Orders</p>
            <p>7</p>
          </Link>
        </div>
        <div className="h-96" ref={mapRef} />
      </div>
    </Adminlayout>
    
  )
}

export default Admindashboard

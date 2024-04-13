'use client';

import React, { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

export default function GoogleMaps() {
	const mapRef = useRef(null);

	useEffect(() => {
		const initializeMap = async () => {
			const loader = new Loader({
				apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY,
				version: 'quartely',
			});

			const { Map } = await loader.importLibrary('maps');

			const locationInMap = {
				lat: 6.52437930,
				lng: 3.37920570,
			};

			// MARKER
			const { Marker } = await loader.importLibrary('marker');

			const options = {
				center: locationInMap,
				zoom: 15,
				mapId: 'NEXT_MAPS_TUTS',
			};

			const map = new Map(mapRef.current, options);

			// add the marker in the map
			const marker = new Marker({
				map: map,
				position: locationInMap,
			});
		};

		initializeMap();
	}, []);

	return (
        <>
        <div className="flex justify-end mb-6">
        <input
          type="text"
          placeholder="Input Tracking Id"
          className="border border-gray-300 rounded-md px-4 py-2 mr-2 text-sm"
        />
        <button className="bg-blue-500 text-lg text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600" >
          Search
        </button>
      </div>
      <div className="h-[90%]" ref={mapRef} />
        </>
    )
    
    
    
    
}

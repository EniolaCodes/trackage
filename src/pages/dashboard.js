import { useState } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import Userlayout from './userlayout';

const containerStyle = {
  width: '100%',
  height: '100%',
};

const center = {
  lat: -34.397,
  lng: 150.644,
};

const Dashboard = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
  });

  const [trackingNumber, setTrackingNumber] = useState('');

  const handleChange = (e) => {
    setTrackingNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle tracking number submission
  };

  return (
    <Userlayout>
    
    <div className="flex h-screen">
      {isLoaded && (
        <div className="w-80%">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
          />
        </div>
      )}
      <div className="flex flex-col justify-center items-center w-20%">
        <form onSubmit={handleSubmit} className="w-full">
          <input
            type="text"
            placeholder="Enter Tracking Number"
            value={trackingNumber}
            onChange={handleChange}
            className="w-full border rounded px-4 py-2 mb-4"
          />
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Submit
          </button>
        </form>
      </div>
    </div>
    </Userlayout>
    
  );
};

export default Dashboard;



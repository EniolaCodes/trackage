import React, { useState } from 'react';
import Adminlayout from './adminlayout';

const PackageTracking = () => {
  const [trackingId, setTrackingId] = useState('');
  const [trackingData, setTrackingData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulate fetching tracking data (replace with your hardcoded data)
      const data = [
        { location: 'In-transit', status: 'Package dispatched', timestamp: new Date().toISOString() },
        { location: 'Berger, Lagos', status: 'Package on the way', timestamp: new Date().toISOString() },
        { location: 'Oshodi, Lagos', status: 'Package on the way', timestamp: new Date().toISOString() },
        { location: 'Yaba, Lagos', status: 'Package on the way', timestamp: new Date().toISOString() },
        { location: 'Delivered', status: 'Package delivered', timestamp: new Date().toISOString() },
        // Add more tracking data as needed
      ];
      setTrackingData(data);
      setError(null);
    } catch (error) {
      setError('Failed to fetch tracking data');
      setTrackingData(null);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Adminlayout>
    <div className="container mx-auto p-6">
      <form onSubmit={handleSubmit} className="flex items-center justify-end mb-8">
        <input
          type="text"
          value={trackingId}
          onChange={(e) => setTrackingId(e.target.value)}
          placeholder="Enter Tracking ID"
          className="border border-gray-300 rounded-md py-2 px-4 mr-2"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md"
          disabled={isLoading}
        >
          {isLoading ? 'Loading...' : 'Submit'}
        </button>
      </form>
      {error && <p className="text-red-500">{error}</p>}
      {trackingData && (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {trackingData.map((item, index) => (
            <div key={index}>
              <div className="flex items-center mb-4">
                <div className="h-px bg-blue-500"></div>
                <div className="flex-1 border-t-2 border-blue-500"></div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0 w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white">{index + 1}</span>
                </div>
                <div>
                  <p className="font-semibold">{item.location}</p>
                  <p className="text-gray-600">{item.status}</p>
                  <p className="text-gray-500">{new Date(item.timestamp).toLocaleString()}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
    </Adminlayout>
  );
};

export default PackageTracking;

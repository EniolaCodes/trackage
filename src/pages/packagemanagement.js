import React from 'react'
import Adminlayout from './adminlayout';
import { useState, useEffect, useRef } from 'react';


const Packagemanagement = () => {
  const [packages, setPackages] = useState([
    {name: 'Chow',
    trackingId: 'TKG076',
    deportedDate: 'February 27, 2024',
    deliveryDate: 'February 28, 2024',
    status: 'Canceled'},
    {
      name: 'Maryam',
      trackingId: 'TKG066',
      deportedDate: 'April 27, 2024',
      deliveryDate: 'May 1, 2024',
      status: 'Canceled'
    },
    {
      name: 'BTC',
      trackingId: 'TKG022',
      deportedDate: 'April 12, 2024',
      deliveryDate: 'April 14, 2024',
      status: 'Delivered'
    },
    {
      name: 'MMM',
      trackingId: 'TKG054',
      deportedDate: 'February 27, 2024',
      deliveryDate: 'February 29, 2024',
      status: 'Canceled'
    },
    {
      name: 'Chow',
      trackingId: 'TKG066',
      deportedDate: 'April 11, 2024',
      deliveryDate: 'April 23, 2024',
      status: 'Delivered'
    }
  ])

  
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState(null);

  const searchInputRef = useRef(null);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Canceled':
        return 'bg-red-500 uppercase hover:bg-red-600 transform hover:scale-105';
      case 'Delivered':
        return 'bg-green-500 uppercase hover:bg-green-600 transform hover:scale-105';
      default:
        return 'bg-gray-500';
    }
  };

  const handleSearch = () => {
    const result = packages.filter(pack => 
      pack.trackingId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pack.name.toLowerCase().includes(searchTerm.toLowerCase()) 
    );
      // Check if there are any matching packages
    if (result.length > 0) {
       setSearchResult(result);
  } else {
    setSearchResult(null); // Set searchResult to null to indicate no matching packages
  }

  };

  const handleClickOutside = (event) => {
    if (searchResult && !searchInputRef.current.contains(event.target)) {
      setSearchResult(null);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, );

  
  return (
    <Adminlayout>
      
      <div className="flex justify-end mb-6">
        <input
          ref={searchInputRef}
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search...."
          className="border border-gray-300 rounded-md px-4 py-2 mr-2"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md"
        >
          Search
        </button>
      </div>
      <table className="w-full mb-4 rounded-md shadow-md">
        <thead className='border-t border-b bg-blue-100'> 
          <tr className='rounded-3xl'>
            <th className="uppercase px-4 py-2 text-center">Name</th>
            <th className="uppercase px-4 py-2 text-center">Tracking ID</th>
            <th className="uppercase px-4 py-2 text-center">Deported Date</th>
            <th className="uppercase px-4 py-2 text-center">Delivery Date</th>
            <th className="uppercase px-4 py-2 text-center">Status</th>
          </tr>
        </thead>
        <tbody className='border-t border-b bg-blue-100 '>
  {searchResult && searchResult.length > 0 ? (
    searchResult.map((result) => (
      <tr key={result.id}>
        <td className="px-4 py-2 text-center">{result.name}</td>
        <td className="px-4 py-2 text-center">{result.trackingId}</td>
        <td className="px-4 py-2 text-center">{result.deportedDate}</td>
        <td className="px-4 py-2 text-center">{result.deliveryDate}</td>
        <td className="px-4 py-2 text-center">
          <button className={`px-4 py-2 rounded-md shadow-md text-white ${getStatusColor(result.status)}`}>
            {result.status}
          </button>
        </td>
      </tr>
    ))
  ) : (
    packages.map((pack) => (
      <tr key={pack.id}>
        <td className="px-4 py-2 text-center">{pack.name}</td>
        <td className=" px-4 py-2 text-center">{pack.trackingId}</td>
        <td className=" px-4 py-2 text-center">{pack.deportedDate}</td>
        <td className=" px-4 py-2 text-center">{pack.deliveryDate}</td>
        <td className=" px-4 py-2 text-center">
          <button className={`px-4 py-2 rounded-3xl shadow-md text-white ${getStatusColor(pack.status)}`}>
            {pack.status}
          </button>
        </td>
      </tr>
    ))
  )}
</tbody>

      </table>
    
     
    </Adminlayout>
  )
}

export default Packagemanagement

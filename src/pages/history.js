import { useState, useEffect, useRef } from 'react';
import Userlayout from './userlayout';
import TopNav from '@/components/TopNav';

const Tracking = () => {



  const [packages, setPackages] = useState([
    {
      id: 1,
      name: 'Chon',
      trackingId: 'TKG066',
      destination: "Kubwa, Abuja",
      deportedDate: 'April 27, 2024',
      deliveryDate: 'May 1, 2024',
      status: 'Canceled'
    },
    {
      id: 2,
      name: 'CLD',
      trackingId: 'TKG087',
      destination: "Ketu, Lagos",
      deportedDate: 'March 27, 2024',
      deliveryDate: 'March 29, 2024',
      status: 'Delivered'
    },
    {
      id: 3,
      name: 'BYC',
      trackingId: 'TKG054',
      destination: "Airport road, Ilorin",
      deportedDate: 'April 14, 2024',
      deliveryDate: 'April 29, 2024',
      status: 'Delivered'
    },
    {
      id: 4,
      name: 'GUP',
      trackingId: 'TKG038',
      destination: "Ringroad, Benin",
      deportedDate: 'April 1, 2024',
      deliveryDate: 'April 5, 2024',
      status: 'Canceled'
    },
    {
      id: 5,
      name: 'KPM',
      trackingId: 'TKG011',
      destination: "Tollgate, Delta",
      deportedDate: 'March 17, 2024',
      deliveryDate: ' March 19, 2024',
      status: 'Delivered'
    },
    {
      id: 6,
      name: 'BYC',
      trackingId: 'TKG084',
      destination: "Sabo, Minna",
      deportedDate: 'April 10, 2024',
      deliveryDate: ' April 19, 2024',
      status: 'Canceled'
    },
    
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


  return(
    <Userlayout>
      <TopNav/>
<div className="overflow-x-auto">
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
      <table className="w-full border-collapse overflow-x-auto">
        <thead className='bg-blue-100 rounded-3xl'> 
          <tr>
            <th className="text-sm md:border border-gray-300 md:text-lg uppercase px-4 py-2 text-center">Name</th>
            <th className="text-sm md:border border-gray-300 md:text-lg uppercase px-4 py-2 text-center">Tracking ID</th>
            <th className="text-sm md:border border-gray-300 md:text-lg uppercase px-4 py-2 text-center">Destination</th>
            <th className="text-sm md:border border-gray-300 md:text-lg uppercase px-4 py-2 text-center">Deported Date</th>
            <th className="text-sm md:border border-gray-300 md:text-lg uppercase px-4 py-2 text-center">Delivery Date</th>
            <th className="text-sm md:border border-gray-300 md:text-lg uppercase px-4 py-2 text-center">Status</th>
          </tr>
        </thead>
        <tbody>
  {searchResult && searchResult.length > 0 ? (
    searchResult.map((result) => (
      <tr key={result.id}>
        <td className="border border-gray-300 px-4 py-2 text-center">{result.name}</td>
        <td className="border border-gray-300 px-4 py-2 text-center">{result.trackingId}</td>
        <td className="border border-gray-300 px-4 py-2 text-center">{result.destination}</td>
        <td className="border border-gray-300 px-4 py-2 text-center">{result.deportedDate}</td>
        <td className="border border-gray-300 px-4 py-2 text-center">{result.deliveryDate}</td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <button className={`px-4 py-2 rounded-md shadow-md text-white ${getStatusColor(result.status)}`}>
            {result.status}
          </button>
        </td>
      </tr>
    ))
  ) : (
    packages.map((pack) => (
      <tr key={pack.id}>
        <td className="text-sm md:text-lg border border-gray-300 px-4 py-2 text-center">{pack.name}</td>
        <td className="text-sm md:text-lg border border-gray-300 px-4 py-2 text-center">{pack.trackingId}</td>
        <td className="text-sm md:text-lg border border-gray-300 px-4 py-2 text-center">{pack.destination}</td>
        <td className="text-sm md:text-lg border border-gray-300 px-4 py-2 text-center">{pack.deportedDate}</td>
        <td className="text-sm md:text-lg border border-gray-300 px-4 py-2 text-center">{pack.deliveryDate}</td>
        <td className="text-sm md:text-lg border border-gray-300 px-4 py-2 text-center">
          <button className={`textsm: md:text:lg px-4 py-2 rounded-3xl shadow-md text-white ${getStatusColor(pack.status)}`}>
            {pack.status}
          </button>
        </td>
      </tr>
    ))
  )}
</tbody>

      </table>
    </div>
    </Userlayout>

  )
}
export default Tracking
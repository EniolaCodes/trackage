import { useState, useEffect, useRef } from 'react';
import Userlayout from './userlayout';

const Tracking = () => {



  const [packages, setPackages] = useState([
    {
      id: 1,
      name: 'Chow',
      trackingId: 'TKG066',
      deportedDate: 'April 27, 2024',
      deliveryDate: 'May 1, 2024',
      status: 'Canceled'
    },
    {
      id: 2,
      name: 'BYC',
      trackingId: 'TKG011',
      deportedDate: 'March 27, 2024',
      deliveryDate: 'March 29, 2024',
      status: 'Delivered'
    },
    {
      id: 3,
      name: 'BCT',
      trackingId: 'TKG054',
      deportedDate: 'April 14, 2024',
      deliveryDate: 'April 29, 2024',
      status: 'Delivered'
    },
    {
      id: 4,
      name: 'GUO',
      trackingId: 'TKG038',
      deportedDate: 'April 1, 2024',
      deliveryDate: 'April 5, 2024',
      status: 'Canceled'
    },
    {
      id: 5,
      name: 'BYC',
      trackingId: 'TKG011',
      deportedDate: 'Mrach 17, 2024',
      deliveryDate: ' March 19, 2024',
      status: 'Delivered'
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
    const result = packages.find(pack => pack.trackingId.toLowerCase().includes(searchTerm.toLowerCase()));
    setSearchResult(result);
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
<div className="">
      <div className="flex justify-end mb-6">
        <input
          ref={searchInputRef}
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search By Tracking Id"
          className="border border-gray-300 rounded-md px-4 py-2 mr-2"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md"
        >
          Search
        </button>
      </div>
      <table className="w-full border-collapse">
        <thead className='bg-blue-100'> 
          <tr>
            <th className="border border-gray-300 uppercase px-4 py-2 text-center">Name</th>
            <th className="border border-gray-300 uppercase px-4 py-2 text-center">Tracking ID</th>
            <th className="border border-gray-300 uppercase px-4 py-2 text-center">Deported Date</th>
            <th className="border border-gray-300 uppercase px-4 py-2 text-center">Delivery Date</th>
            <th className="border border-gray-300 uppercase px-4 py-2 text-center">Status</th>
          </tr>
        </thead>
        <tbody>
          {searchResult ? (
            <tr>
              <td className="border border-gray-300 px-4 py-2 text-center">{searchResult.name}</td>
              <td className="border border-gray-300 px-4 py-2 text-center">{searchResult.trackingId}</td>
              <td className="border border-gray-300 px-4 py-2 text-center">{searchResult.deportedDate}</td>
              <td className="border border-gray-300 px-4 py-2 text-center">{searchResult.deliveryDate}</td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                <button className={`px-4 py-2 rounded-md shadow-md text-white ${getStatusColor(searchResult.status)}`}>
                  {searchResult.status}
                </button>
              </td>
            </tr>
          ) : (
            packages.map(pack => (
              <tr key={pack.id}>
                <td className="border border-gray-300 px-4 py-2 text-center">{pack.name}</td>
                <td className="border border-gray-300 px-4 py-2 text-center">{pack.trackingId}</td>
                <td className="border border-gray-300 px-4 py-2 text-center">{pack.deportedDate}</td>
                <td className="border border-gray-300 px-4 py-2 text-center">{pack.deliveryDate}</td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  <button className={`px-4 py-2 rounded-3xl shadow-md text-white ${getStatusColor(pack.status)}`}>
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
import TopNav from "@/components/TopNav";
import Userlayout from "./userlayout";
import { useState, useEffect, useRef } from 'react';




const Orders = () => {
 
  // Dummy data for demonstration
  const [packages, setPackages] = useState( [
    { name: 'GTY', trackingId: 'TKG081', destination: "Aba, Enugu", deportedDate: 'March 23, 2024', deliveryDate: 'March 27, 2024', status: 'Pending' },
    { name: 'KPM', trackingId: 'TKG003', destination:"Molete, Ibadan", deportedDate: 'March 28, 2024', currentLocation:'Berger, Lagos', deliveryDate: 'April 20, 2024',  status: 'In-Transit' },
    { name: 'BYC', trackingId: 'TKG053', destination:"Nzukka, Enugu", deportedDate: 'March 31, 2024', currentLocation:'Edo, Benin',  deliveryDate: 'April 20, 2024',  status: 'In-Transit' },
    { name: 'DFG', trackingId: 'TKG009', destination:"DanFodio, Zamfara", deportedDate: 'April 20 23, 2024', deliveryDate: 'April 27, 2024', status: 'Pending' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState(null);

  const searchInputRef = useRef(null);


  const getStatusColor = (status) => {
    switch (status) {
      case 'In-Transit':
        return 'bg-blue-500 text-white uppercase hover:bg-blue-600 transform hover:scale-105';
      case 'Pending':
        return 'bg-orange-500 text-white uppercase hover:bg-orange-600 transform hover:scale-105'  
      default:
        return 'bg-gray-500 text-white';
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
      <table className="min-w-full overflow-x-auto bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="text-sm md:text-left md:text-lg px-6 py-3 bg-blue-100   uppercase tracking-wider">Name</th>
            <th className="text-sm md:text-left md:text-lg px-6 py-3 bg-blue-100   uppercase tracking-wider">Tracking Id</th>
            <th className="text-sm md:text-left md:text-lg px-6 py-3 bg-blue-100   uppercase tracking-wider">Destination</th>
            <th className="text-sm md:text-left md:text-lg px-6 py-3 bg-blue-100   uppercase tracking-wider">Deported Date</th>
            <th className="text-sm md:text-left md:text-lg px-6 py-3 bg-blue-100   uppercase tracking-wider">Current Location</th>
            <th className="text-sm md:text-left md:text-lg px-6 py-3 bg-blue-100   uppercase tracking-wider">Delivery Date</th>
            <th className="text-sm md:text-left md:text-lg px-6 py-3 bg-blue-100 uppercase tracking-wider">Status</th>
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
        <td className="border border-gray-300 px-4 py-2 text-center">{result.currentLocation}</td>
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
        <td className="text-sm md:text-lg border border-gray-300 px-4 py-2 text-center">{pack.currentLocation}</td>
        <td className="text-sm md:text-lg border border-gray-300 px-4 py-2 text-center">{pack.deliveryDate}</td>
        <td className="text-sm md:text-lg border border-gray-300 px-4 py-2 text-center">
          <button className={`text-sm px-4 py-2 rounded-3xl shadow-md text-white ${getStatusColor(pack.status)}`}>
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

  );
};

export default Orders;

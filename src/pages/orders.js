import Userlayout from "./userlayout";




const Orders = () => {
  // Dummy data for demonstration
  const trackingData = [
    { name: 'GIG', trackingNumber: 'TKG001', deportedDate: 'March 23, 2024', deliveryDate: 'March 27, 2024', status: 'Pending' },
    { name: 'GUO', trackingNumber: 'TKG009', deportedDate: 'March 25, 2024', deliveryDate: 'April 7, 2024', status: 'Delivered' },
    { name: 'Dominos', trackingNumber: 'TKG003', deportedDate: 'March 28, 2024', deliveryDate: 'April 20, 2024',  status: 'In-Transit' },
    { name: 'Chow Chow', trackingNumber: 'TKG010', deportedDate: 'March 30, 2024', deliveryDate: 'April 7, 2024', status: 'Cancelled' },
    { name: 'GUO', trackingNumber: 'TKG029', deportedDate: 'April 3, 2024', deliveryDate: 'April 6, 2024', status: 'Cancelled' },
    { name: 'GNL', trackingNumber: 'TKG067', deportedDate: 'April 12, 2024', deliveryDate: 'April 15, 2024',  status: 'Delivered' },
    // Add more dummy data as needed
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Delivered':
        return 'bg-green-500 text-black hover:bg-green-600 transform hover:scale-105';
      case 'In-Transit':
        return 'bg-blue-500 text-black hover:bg-blue-600 transform hover:scale-105';
      case 'Cancelled':
        return 'bg-red-500 text-black hover:bg-red-600 transform hover:scale-105';
      case 'Pending':
        return 'bg-orange-500 text-black hover:bg-orange-600 transform hover:scale-105'  
      default:
        return 'bg-gray-500 text-white';
    }
  };

  return (
    <Userlayout>
          <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="text-left px-6 py-3 bg-blue-100 text-gray-500 font-semibold uppercase tracking-wider">Name</th>
            <th className="text-left px-6 py-3 bg-blue-100 text-gray-500 font-semibold uppercase tracking-wider">Tracking Number</th>
            <th className="text-left px-6 py-3 bg-blue-100 text-gray-500 font-semibold uppercase tracking-wider">Deported Date</th>
            <th className="text-left px-6 py-3 bg-blue-100 text-gray-500 font-semibold uppercase tracking-wider">Delivery Date</th>
            <th className="text-left px-6 py-3 bg-blue-100 text-gray-500 font-semibold uppercase tracking-wider">Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {trackingData.map((item, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.trackingNumber}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.deportedDate}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.deliveryDate}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button className={`px-4 py-2 rounded-3xl ${getStatusColor(item.status)}`}>
                  {item.status}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </Userlayout>

  );
};

export default Orders;

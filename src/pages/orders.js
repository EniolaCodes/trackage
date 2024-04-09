import Userlayout from "./userlayout";




const Orders = () => {
  // Dummy data for demonstration
  const trackingData = [
    { name: 'GIG', trackingNumber: 'ABC123', deportedDate: 'March 23, 2024', deliveryDate: 'March 27, 2024', packageName: 'Package A', status: 'Pending' },
    { name: 'GUO', trackingNumber: 'DEF456', deportedDate: 'March 25, 2024', deliveryDate: 'April 7, 2024', packageName: 'Package B', status: 'Delivered' },
    { name: 'Dominos', trackingNumber: 'GHI789', deportedDate: 'March 28, 2024', deliveryDate: 'April 20, 2024', packageName: 'Package D', status: 'Delivered' },
    { name: 'Chow Chow', trackingNumber: 'GLO789', deportedDate: 'March 30, 2024', deliveryDate: 'April 7, 2024', packageName: 'Package E', status: 'Cancelled' },
    { name: 'GUO', trackingNumber: 'TOT789', deportedDate: 'April 3, 2024', deliveryDate: 'April 6, 2024', packageName: 'Package F', status: 'Cancelled' },
    { name: 'GNL', trackingNumber: 'MTI789', deportedDate: 'April 12, 2024', deliveryDate: 'April 15, 2024', packageName: 'Package G', status: 'In-transit' },
    // Add more dummy data as needed
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Delivered':
        return 'bg-green-500 text-black';
      case 'In-transit':
        return 'bg-blue-500 text-black';
      case 'Cancelled':
        return 'bg-red-500 text-black';
      case 'Pending':
        return 'bg-orange-500 text-black'  
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
            <th className="text-left px-6 py-3 bg-blue-100 text-gray-500 font-semibold uppercase tracking-wider">Package Name</th>
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
              <td className="px-6 py-4 whitespace-nowrap">{item.packageName}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button className={`px-4 py-2 rounded ${getStatusColor(item.status)}`}>
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

import Userlayout from "./userlayout";




const Orders = () => {
  // Dummy data for demonstration
  const trackingData = [
    { name: 'GIG', trackingNumber: 'TKG001', deportedDate: 'March 23, 2024', deliveryDate: 'March 27, 2024', status: 'Pending' },
    { name: 'Dominos', trackingNumber: 'TKG003', deportedDate: 'March 28, 2024', deliveryDate: 'April 20, 2024',  status: 'In-Transit' },
  ];

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

  return (
    <Userlayout>
          <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="text-left px-6 py-3 bg-blue-100  font-semibold uppercase tracking-wider">Name</th>
            <th className="text-left px-6 py-3 bg-blue-100  font-semibold uppercase tracking-wider">Tracking Number</th>
            <th className="text-left px-6 py-3 bg-blue-100  font-semibold uppercase tracking-wider">Deported Date</th>
            <th className="text-left px-6 py-3 bg-blue-100  font-semibold uppercase tracking-wider">Delivery Date</th>
            <th className="text-left px-6 py-3 bg-blue-100 font-semibold uppercase tracking-wider">Status</th>
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

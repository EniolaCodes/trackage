import React from 'react';

const Track = ({ name, trackingId, deportedDate, deliveryDate, currentLocation, status }) => {

  // Determine button color based on status

  const getStatusColor = () => {
    switch (status) {
        case 'canceled':
            return 'bg-red-500 hover:bg-red-600 transform hover:scale-105';
        case 'in-transit':
            return 'bg-blue-500 hover:bg-blue-600 transform hover:scale-105';
        case 'pending':
            return 'bg-orange-500 hover:bg-orange-600 transform hover:scale-105';
        case 'delivered':
            return 'bg-green-500 hover:bg-green-600 transform hover:scale-105';
        default:
            return 'bg-gray-500';
    }
};

    return (
        <div className="bg-blue-100 p-4 rounded-lg shadow-md mb-4">
            <table className="w-full">
                <thead >
                    <tr>
                        <th className="px-4 py-2 text-center">Name</th>
                        <th className="px-4 py-2 text-center">Tracking ID</th>
                        <th className="px-4 py-2 text-center">Deported Date</th>
                        <th className="px-4 py-2 text-center">Delivery Date</th>
                        <th className="px-4 py-2 text-center">Current Location</th>
                        <th className="px-4 py-2 text-center">Status</th>
                    </tr>
                </thead>
                <tbody >
                    <tr>
                        <td className="px-4 py-2 text-center">{name}</td>
                        <td className="px-4 py-2 text-center">{trackingId}</td>
                        <td className="px-4 py-2 text-center">{deportedDate}</td>
                        <td className="px-4 py-2 text-center">{deliveryDate}</td>
                        <td className="px-4 py-2 text-center">{currentLocation}</td>
                        <td className="px-4 py-2 text-center">
                            <button className={`text-white py-1 px-3 rounded-md transition-colors duration-300 ${getStatusColor()}`}>
                                {status}
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );

};
export default Track;
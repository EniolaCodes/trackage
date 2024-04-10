import React from 'react'
import { useState } from 'react';
import Adminlayout from './adminlayout'

const Overview = () => {
  const [packages, setPackages] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [confirmationVisible, setConfirmationVisible] = useState(false);
  const [confirmationPackageId, setConfirmationPackageId] = useState('');
  const [confirmationAction, setConfirmationAction] = useState('');

  const addNewPackage = () => {
    const newPackage = {
      id: packages.length + 1,
      trackingId: `TRG${packages.length + 1}`,
      customerName: '',
      dateSubmitted: new Date().toLocaleDateString('en-US', { month: 'long', day: '2-digit', year: 'numeric' }),
      status: 'Pending'
    };
    setPackages([...packages, newPackage]);
  };
  const handleStatusChange = (id, newStatus) => {
    setPackages(packages.map(pkg => pkg.id === id ? { ...pkg, status: newStatus } : pkg));
  };

  const handleCustomerNameChange = (id, newName) => {
    setPackages(packages.map(pkg => pkg.id === id ? { ...pkg, customerName: newName } : pkg));
  };

  
  const filteredPackages = packages.filter(pkg => pkg.trackingId.toLowerCase().includes(searchTerm.toLowerCase()));

  const confirmAction = (id, action) => {
    setConfirmationVisible(true);
    setConfirmationPackageId(id);
    setConfirmationAction(action);
  };

  const handleConfirm = (confirmed) => {
    if (confirmed) {
      if (confirmationAction === 'reject') {
        handleStatusChange(confirmationPackageId, 'Rejected');
      } else if (confirmationAction === 'approve') {
        handleStatusChange(confirmationPackageId, 'Approved');
      }
    }
    setConfirmationVisible(false);
  };


  
  return (

    <Adminlayout>
<div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md" onClick={addNewPackage}>Add New Package</button>
        <input
          type="text"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          placeholder="Search by Tracking ID"
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none"
        />
      </div>
      {filteredPackages.map(pkg => (
        <table key={pkg.id} className="w-full mb-4">
          <thead className='border-t border-b bg-blue-100'>
              < tr className='rounded-3xl'>
              <th className=" px-4 py-2 text-center" >Tracking ID</th>
              <th className=" px-4 py-2 text-center">Customer Name</th>
              <th className="px-4 py-2 text-center">Date Submitted</th>
              <th className= "px-4 py-2 text-center">Status</th>
              <th className="px-4 py-2 text-center" >Actions</th>
            </tr>
          </thead>
          <tbody className='border-t border-b bg-blue-100 rounded-3xl'>
            <tr className='rounded-3xl'>
              <td className=" px-4 py-2 text-center">{pkg.trackingId}</td>
              <td className="  px-4 py-2 text-center">
                <input
                  type="text"
                  value={pkg.customerName}
                  onChange={e => handleCustomerNameChange(pkg.id, e.target.value)}
                  onBlur={() => handleCustomerNameChange(pkg.id, pkg.customerName)}
                  className="w-full rounded-md px-2 py-1 focus:outline-none"
                 
                />
              </td>
              <td className="px-4 py-2 text-center">{pkg.dateSubmitted}</td>
              <td className={`px-4 py-2 text-center ${pkg.status === 'Rejected' ? 'text-red-500 uppercase font-bold' : (pkg.status === 'Approved' ? 'text-green-500 uppercase font-bold' : '')}`}>{pkg.status}</td>
              <td className="px-4 py-2 text-center">
                {pkg.status === 'Pending' && (
                  <>
                    <button className="bg-green-500 text-white px-2 py-1 rounded-md shadow-md mr-2 hover:bg-green-600" onClick={() => confirmAction(pkg.id, 'approve')}>Approve</button>
                    <button className="bg-red-500 text-white px-2 py-1 rounded-md shadow-md hover:bg-red-600" onClick={() => confirmAction(pkg.id, 'reject')}>Reject</button>
                  </>
                )}
              </td>
            </tr>
          </tbody>
        </table>
      ))}
            {confirmationVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-400 bg-opacity-75">
          <div className="bg-white p-4 rounded-md shadow-md">
            <p className="mb-2">Are you sure you want to {confirmationAction === 'reject' ? 'reject' : 'approve'} this order?</p>
            <div className="flex justify-center">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2" onClick={() => handleConfirm(true)}>Yes</button>
              <button className="bg-gray-500 text-white px-4 py-2 rounded-md" onClick={() => handleConfirm(false)}>No</button>
            </div>
          </div>
        </div>
      )}

    </div>
</Adminlayout>
  )
}

export default Overview

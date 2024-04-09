import Userlayout from './userlayout';
import React from 'react'

import { useState } from 'react';


const Notification = () => {
  const [isDefault, setIsDefault] = useState(true);

  const toggleNotification = () => {
    setIsDefault(!isDefault);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission
  };

  return (
    <Userlayout>
    <div className="container mx-40" role="alert">
      <h1 className='text-2xl'>Alert and Notification</h1>
      <form onSubmit={handleSubmit} className="mt-4 mx-auto">
          <div className="flex items-center gap-6">
            <p className="text-xl">Current Notification Type</p>
            <div className="bg-blue-100 px-4 py-2 text-black border rounded">
              <p>Push Notification</p>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 px-2 mb-20 md:mb-0 mt-8">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <label htmlFor="setting1">Change Notification Type</label>
                <select id="setting1" name="setting1" className="border bg-blue-100 rounded p-1 block w-full mt-2">
                  <option value="option1">Push Notification</option>
                  <option value="option2">SMS</option>
                </select>
              </div>
              <div>
                <label htmlFor="setting2">Set Up New Alert</label>
                <select id="setting2" name="setting2" className="border bg-blue-100 rounded p-1 block w-full mt-2">
                  <option value="option1">Push Notification</option>
                  <option value="option2">SMS</option>
                </select>
              </div>
              <div className='mt-8'>
                <label htmlFor="setting3">Reminder</label>
                <select id="setting3" name="setting3" className="border bg-blue-100 rounded p-1 block w-full mt-1">
                  <option value="option1">Push Notification</option>
                  <option value="option2">SMS</option>
                </select>
              </div>
              <div className='mt-8'>
                <label htmlFor="setting4">Set Up New Alert</label>
                <select id="setting4" name="setting4" className="border bg-blue-100 rounded p-1 block w-full mt-1">
                  <option value="option1">Push Notification</option>
                  <option value="option2">SMS</option>
                </select>
              </div>
            </div>
          </div>
        <div className="mt-8">
          <button type="button" className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded mr-4">
            Save
          </button>
          <button type="submit" className="text-orange-400 border border-solid border-orange-400 shadow-sm hover:bg-orange-300 hover:text-white   py-2 px-4 rounded" >
            Edit
          </button>
        </div>
      </form>
    </div>
    </Userlayout>

  
    
  );
};

export default Notification;


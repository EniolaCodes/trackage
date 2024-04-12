
import React from 'react'

import { useState } from 'react';


const Generalnotice = () => {
  const [isDefault, setIsDefault] = useState(true);

  const toggleNotification = () => {
    setIsDefault(!isDefault);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission
  };
  const submit =() =>{
    alert("Notification Changed");
  }
  return (
   
    <div className="" role="alert">
      <h1 className='text-2xl'>Alert and Notification</h1>
      <form onSubmit={handleSubmit} className="mt-4 mx-auto">
          <div className="flex items-center gap-6">
            <p className="text-xl">Current Notification Type</p>
            <div className="bg-blue-100 px-4 py-2 text-black border rounded">
              <p>Push Notification</p>
            </div>
          </div>
          
          <div className="w-3/4 mt-8">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <label htmlFor="setting1">Change Notification Type</label>
                <select id="setting1" name="setting1" className="border bg-blue-100 rounded p-1 block w-full mt-2">
                  <option value="option1">Push Notification</option>
                  <option value="option2">SMS</option>
                </select>
              </div>
              <div className='ml-8'>
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
              <div className='mt-8 ml-8'>
                <label htmlFor="setting4">Set Up New Alert</label>
                <select id="setting4" name="setting4" className="border bg-blue-100 rounded p-1 block w-full mt-1">
                  <option value="option1">Push Notification</option>
                  <option value="option2">SMS</option>
                </select>
              </div>
            </div>
          </div>
        <div className="mt-16 text-center">
          <button type="button" className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded" onClick={submit}>
            Save
          </button>
        </div>
      </form>
    </div>
    

  
    
  );
};

export default Generalnotice;


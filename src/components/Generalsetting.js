import { useState } from 'react';


const Generalsetting = () => {
  const [activeTab, setActiveTab] = useState("account");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const handleSubmit = (e) =>{
    e.preventDefault();
  }
  const submit = () =>{
    alert("Updated!")
  }
  return (
    
    <div className="container mx-auto p-4">
      <div className="flex flex-row md:flex-col">
        
        <div className="flex flex-row justify-between mb-20">
          <div
            className={`cursor-pointer  pb-1 mb-2 text-xl ${activeTab === "account" ? " text-orange-500" : ""}`}
            onClick={() => handleTabClick("account")}
          >
            Account Information
          </div>
          <div
            className={`cursor-pointer pb-1 mb-2 text-xl ${activeTab === "password" ? " text-orange-500" : ""}`}
            onClick={() => handleTabClick("password")}
          >
            Password Settings
          </div>
          <div
            className={`cursor-pointer  pb-1 mb-2 text-xl ${activeTab === "notification" ? "text-orange-500" : ""}`}
            onClick={() => handleTabClick("notification")}
          >
            Update Notification
          </div>
          <div
            className={`cursor-pointer  pb-1 text-xl ${activeTab === "security" ? "text-orange-500" : ""}`}
            onClick={() => handleTabClick("security")}
          >
            Security
          </div>
        </div>
        <div className="md:w-1/2 mx-auto">
        {activeTab === "account" && (
            <div>
              <h2 className='text-center font-semibold text-xl mb-8'>Update Your Information</h2>
              <form onSubmit={handleSubmit} >
                <div className="mb-4">
                  <label className="block mb-1">Name:</label>
                  <input type="name" placeholder='Chiamanda Okafor' className="border px-3 py-2 w-full rounded" />
                </div>
                <div className="mb-4">
                  <label className="block mb-1">Email:</label>
                  <input type="email" placeholder='ChiamandaOkafor@gmail.com' className="border px-3 py-2 w-full rounded" />
                </div>
                <div className="mb-4">
                  <label className="block mb-1">Address</label>
                  <input type="text" placeholder='24, Breadford Street, Apapa Lagos.' className="border px-3 py-2 w-full rounded" />
                </div>
                <div className="mb-8">
                  <label className="block mb-1">Phone no</label>
                  <input type="text" placeholder='+2348145862060' className="border px-3 py-2 w-full rounded" />
                </div>
                <button type="submit" onClick={submit} className="bg-blue-500 text-white w-full px-4 py-2 rounded hover:bg-blue-600">Save</button>
              </form>
            </div>
          )}
          {activeTab === "password" && (
            <div className="md:1/2 mx-auto">
              <h2 className="text-xl text-center font-semibold mb-8">Update Your Password</h2>
              <form onSubmit={handleSubmit} >
                  <div className="mb-4">
                    <label className="block mb-1">Current Password</label>
                    <input type="password" placeholder='*********' className="border px-3 py-2 w-full rounded" />
                  </div>
                  <div className="mb-4">
                    <label className="block mb-1">New Password</label>
                    <input type="password" placeholder="set new password" className="border px-3 py-2 w-full rounded" />
                  </div>
                  <div className="mb-8">
                    <label className="block mb-1">Confirm New Password</label>
                    <input type="password" placeholder="set new password" className="border px-3 py-2 w-full rounded" />
                  </div>
                <button type="submit" onClick={submit}  className="bg-blue-500 w-full text-white px-4 py-2 rounded hover:bg-blue-600">Save</button>
              </form>
            </div>
          )}
          {activeTab === "notification" && (
            <div className="md:1/2 mx-auto">
              <h2 className="text-xl text-center font-semibold mb-8">Update Your Preference</h2>
              <form onSubmit={handleSubmit} >
                <div className="mb-4">
                  <label className="block mb-1">Change Notification Type</label>
                  <select className="border px-3 py-2 w-full rounded">
                    <option value="email">Push Notification</option>
                    <option value="sms">SMS</option>
                  </select>
                </div>
                <div className="mb-8">
                  <label className="block mb-1">Change Notification Type</label>
                  <select className="border px-3 py-2 w-full rounded">
                    <option value="email">SMS</option>
                    <option value="sms">Push Notification</option>
                  </select>
                </div>
                <button type="submit" onClick={submit}  className="bg-blue-500 text-white w-full px-4 py-2 rounded hover:bg-blue-600">Save</button>
              </form>
            </div>
          )}
          {activeTab === "security" && (
            <div className="md:1/2 mx-auto">
              <h2 className="text-xl text-center font-semibold mb-4"> Update Security Settings</h2>
              {/* Text with toggle button */}
              <div className="flex items-center mb-4">
                <span className="mr-4">Security</span>
                {/* Toggle button */}
                <label htmlFor="securityToggle" className="flex items-center cursor-pointer">
                  <input id="securityToggle" type="checkbox" className="appearance-none w-6 h-6 mr-2 border rounded-full" />
                  <span className="w-12 h-6 bg-gray-100 rounded-full"></span>
                </label>
              </div>
              <form onSubmit={handleSubmit} >
                <div className="mb-4">
                    <label className=''>Set Up Your New Email</label>
                    <input type="email" placeholder='New Email' className="border mt-4 px-3 py-2 w-full rounded" />
                </div>
                <div className="mb-8">
                    <label className=''>Set Up Your New Number</label>
                    <input type="text" placeholder='New Number' className="border mt-4 px-3 py-2 w-full rounded" />
                </div>
                <button type="submit" onClick={submit}  className="bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-blue-600">Submit</button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
    

  );
};

export default Generalsetting;

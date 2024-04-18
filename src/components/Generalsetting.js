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
    
    <div className="container mx-auto">
      <div className="flex flex-row md:flex-col">
        
        <div className="flex flex-row justify-between mb-20">
          <div
            className={`cursor-pointer text-xl ${activeTab === "account" ? " text-blue-500" : ""}`}
            onClick={() => handleTabClick("account")}
          >
            Account Information
          </div>
          <div
            className={`cursor-pointer text-xl ${activeTab === "password" ? " text-blue-500" : ""}`}
            onClick={() => handleTabClick("password")}
          >
            Password Settings
          </div>
          <div
            className={`cursor-pointer text-xl ${activeTab === "notification" ? "text-blue-500" : ""}`}
            onClick={() => handleTabClick("notification")}
          >
            Update Notification
          </div>
          <div
            className={`cursor-pointer  pb-1 text-xl ${activeTab === "security" ? "text-blue-500" : ""}`}
            onClick={() => handleTabClick("security")}
          >
            Security
          </div>
        </div>
        <div className="md:w-1/2 mx-auto">
        {activeTab === "account" && (
            <div>
              <h2 className='text-center font-semibold text-xl'>Update Your Information</h2>
              <form onSubmit={handleSubmit} >
                <div className="mb-4">
                  <label className="block mb-1 text-lg">Name:</label>
                  <input type="name" placeholder='Chiamanda Okafor' className="border px-3 py-2 w-full rounded text-sm" />
                </div>
                <div className="mb-4">
                  <label className="block mb-1 text-lg">Email:</label>
                  <input type="email" placeholder='ChiamandaOkafor@gmail.com' className="border px-3 py-2 w-full rounded text-sm" />
                </div>
                <div className="mb-4">
                  <label className="block mb-1 text-lg">Address</label>
                  <input type="text" placeholder='24, Breadford Street, Apapa Lagos.' className="border px-3 py-2 w-full rounded text-sm" />
                </div>
                <div className="mb-8">
                  <label className="block mb-1 text-lg">Phone no</label>
                  <input type="text" placeholder='+2348145862060' className="border px-3 py-2 w-full rounded text-sm" />
                </div>
                <button type="submit" onClick={submit} className="bg-blue-500 text-white w-full px-4 py-2 rounded text-lg hover:bg-blue-600">Save</button>
              </form>
            </div>
          )}
          {activeTab === "password" && (
            <div className="md:1/2 mx-auto">
              <h2 className="text-xl text-center font-semibold mb-8">Update Your Password</h2>
              <form onSubmit={handleSubmit} >
                  <div className="mb-4">
                    <label className="block text-lg">Current Password</label>
                    <input type="password" placeholder='*********' className="border px-3 py-2 w-full rounded text-sm" />
                  </div>
                  <div className="mb-4">
                    <label className="block text-lg">New Password</label>
                    <input type="password" placeholder="Set New Password" className="border px-3 py-2 w-full rounded text-sm" />
                  </div>
                  <div className="mb-8">
                    <label className="block text-lg">Confirm New Password</label>
                    <input type="password" placeholder="Set New Password" className="border px-3 py-2 w-full rounded text-sm" />
                  </div>
                <button type="submit" onClick={submit}  className="bg-blue-500 w-full text-white px-4 py-2 rounded text-lg hover:bg-blue-600">Save</button>
              </form>
            </div>
          )}
          {activeTab === "notification" && (
            <div className="md:1/2 mx-auto">
              <h2 className="text-xl text-center font-semibold mb-8">Update Your Preference</h2>
              <form onSubmit={handleSubmit} >
                <div className="mb-4">
                  <label className="block text-lg">Change Notification Type</label>
                  <select className="border px-3 py-2 w-full rounded">
                    <option value="email" className='text-sm'>Push Notification</option>
                    <option value="sms" className='text-sm'>SMS</option>
                    <option value="option2" className='text-sm'>Email</option>
                  </select>
                </div>
                <div className="mb-8">
                  <label className="block text-lg">Change Notification Type</label>
                  <select className="border px-3 py-2 w-full rounded">
                    <option value="SMS" className='text-sm'>SMS</option>
                    <option value="Push Notification" className='text-sm'>Push Notification</option>
                    <option value="Email" className='text-sm'>Email</option>
                  </select>
                </div>
                <button type="submit" onClick={submit}  className="bg-blue-500 text-white text-lg w-full px-4 py-2 rounded hover:bg-blue-600">Save</button>
              </form>
            </div>
          )}
          {activeTab === "security" && (
            <div className="md:1/2 mx-auto">
              <h2 className="text-xl text-center font-semibold mb-4"> Update Security Settings</h2>
              <form onSubmit={handleSubmit} >
                <div className="mb-4">
                    <label className='text-lg'>Set Up Your New Email</label>
                    <input type="email" placeholder='New Email' className="border mt-4 px-3 py-2 w-full rounded text-sm" />
                </div>
                <div className="mb-8">
                    <label className='text-lg'>Set Up Your New Number</label>
                    <input type="text" placeholder='New Number' className="border mt-4 px-3 py-2 w-full rounded text-sm" />
                </div>
                <button type="submit" onClick={submit}  className="bg-blue-500 text-white text-lg px-4 py-2 rounded w-full hover:bg-blue-600">Submit</button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
    

  );
};

export default Generalsetting;

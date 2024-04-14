import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { BiSolidPackage } from "react-icons/bi";
import { MdTrackChanges, MdOutlineSettings, MdNotifications, MdOutlineHelp, MdOutlineLogout, MdHomeFilled} from "react-icons/md";

const Adminlayout = ({children}) => {
  const [activeTab, setActiveTab] = useState("dashboard")

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <aside className="flex overflow-y-hidden ">
      <div className='w-1/4 h-screen '>
      <div className='p-2'>
      <Image src={'/assets/Frame 18.png'} alt='trackage logo' width={200} height={200} />
      </div>
      <ul className='bg-blue-50 h-screen p-8'>
        <li className={`cursor-pointer mb-8 flex items-center text-xl ${activeTab === "dashboard" ? "border-t border-b bg-blue-100 p-2" : ""}`}
         onClick={() => handleTabClick("dashboard")}>
        <MdHomeFilled className='text-blue-800'/> 
        <Link href={"/admindashboard"} className='ml-4'>Dashboard</Link> </li>

          <li className={`cursor-pointer mb-8 flex items-center text-xl ${activeTab === "package management" ? "border-t border-b bg-blue-100 p-2" : ""}`}
         onClick={() => handleTabClick("package management")}>
          <BiSolidPackage  className='text-blue-800'/>
          <Link href={"/trackingoverview"} className='ml-4'>Package Management</Link> </li>

          <li className={`cursor-pointer mb-8 flex items-center text-xl ${activeTab === "tracking overview" ? "border-t border-b bg-blue-100 p-2" : ""}`}
         onClick={() => handleTabClick("tracking overview")}>
          <MdTrackChanges className='text-blue-800'/>
          <Link href={"/packagemanagement"} className='ml-4'>Tracking Overview</Link> </li>
       
         
          <li className={`cursor-pointer mb-8 flex items-center text-xl ${activeTab === "notification" ? "border-t border-b bg-blue-100 p-2" : ""}`}
         onClick={() => handleTabClick("notification")}>
          <MdNotifications className='text-blue-800'/>
          <Link href={"/adminnotification"} className='ml-4'>Notification</Link> </li>

          <li className={`cursor-pointer mb-8 flex items-center text-xl ${activeTab === "settings" ? "border-t border-b bg-blue-100 p-2" : ""}`}
         onClick={() => handleTabClick("settings")}>
          <MdOutlineSettings className='text-blue-800'/>
          <Link href={"/adminsettings"} className='ml-4'>Settings</Link>  </li>


          <li className={`cursor-pointer mb-8 flex items-center text-xl ${activeTab === "logout" ? "border-t border-b bg-blue-100 p-2" : ""}`}
         onClick={() => handleTabClick("logout")}>
          <MdOutlineLogout className='text-blue-800'/>
          <Link href={"/adminlogout"} className='ml-4'>Log Out</Link></li>
      </ul>
      </div>
      <div className='w-3/4 p-10 mt-8'>
        {children}
      </div>
      
    </aside>
  );
};

export default Adminlayout;







import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { BiSolidPackage } from "react-icons/bi";
import { MdTrackChanges, MdOutlineSettings, MdNotifications, MdOutlineHelp, MdOutlineLogout, MdHomeFilled} from "react-icons/md";

const Userlayout = ({children}) => {
  const [activeTab, setActiveTab] = useState("dashboard")

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <aside className="flex h-screen">
      <div className='w-1/4'>
      <div className='mt-4 mb-8'>
      <Image src={'/assets/Frame 18.png'} alt='trackage logo' width={200} height={200} />
      </div>
      <ul className='bg-blue-50 h-screen p-8'>
        <li className={`cursor-pointer mb-8 flex items-center text-xl ${activeTab === "dashboard" ? "text-orange-500" : ""}`}
         onClick={() => handleTabClick("dashboard")} >
        <MdHomeFilled className='text-blue-800'/> 
        <Link href={"/dashboard"} className='ml-4'>Dashboard</Link> </li>

          <li className={`cursor-pointer mb-8 flex items-center text-xl ${activeTab === "my orders" ? "text-orange-500" : ""}`}
           onClick={() => handleTabClick("my orders")}>
          <BiSolidPackage  className='text-blue-800'/>
          <Link href={"/orders"} className='ml-4'>My Orders</Link> </li>

          <li className={`cursor-pointer mb-8 flex items-center text-xl ${activeTab === "tracking history" ? "text-orange-500" : ""}`}
           onClick={() => handleTabClick("tracking history")}>
          <MdTrackChanges className='text-blue-800'/>
          <Link href={"/history"} className='ml-4'>Tracking History</Link> </li>

          <li className={`cursor-pointer mb-8 flex items-center text-xl ${activeTab === "notification" ? "text-orange-500" : ""}`}
           onClick={() => handleTabClick("notification")}>
          <MdNotifications className='text-blue-800'/>
          <Link href={"/notification"} className='ml-4'>Notification</Link> </li>
          <li className={`cursor-pointer mb-8 flex items-center text-xl ${activeTab === "settings" ? "text-orange-500" : ""}`}
           onClick={() => handleTabClick("settings")}>
          <MdOutlineSettings className='text-blue-800'/>
          <Link href={"/settings"} className='ml-4'>Settings</Link>  </li>
          <li className={`cursor-pointer mb-8 flex items-center text-xl ${activeTab === "help center" ? "text-orange-500" : ""}`}
           onClick={() => handleTabClick("help center")}>
          <MdOutlineHelp className='text-blue-800'/>
          <Link href={"/helpcenter"} className='ml-4'>Help center</Link>  </li>
          <li className={`cursor-pointer mb-8 flex items-center text-xl ${activeTab === "logout" ? "text-orange-500" : ""}`}
           onClick={() => handleTabClick("logout")}>
          <MdOutlineLogout className='text-blue-800'/>
          <Link href={"/logout"} className='ml-4'>Log Out</Link></li>
      </ul>
      </div>

      <div className='w-3/4'>
        {children}
      </div>
    </aside>
  );
};

export default Userlayout;

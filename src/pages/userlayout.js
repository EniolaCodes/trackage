import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { BiSolidPackage } from "react-icons/bi";
import { useRouter } from 'next/router';
import { MdTrackChanges, MdOutlineSettings, MdNotifications, MdOutlineHelp, MdOutlineLogout, MdHomeFilled} from "react-icons/md";

const Userlayout = ({children}) => {
  const [activeTab, setActiveTab] = useState("/dashboard")

const router = useRouter();
console.log(router.pathname);

useEffect( () =>{
  setActiveTab(router.pathname)
}
,[router.pathname])

  return (
    <aside className="flex overflow-y-hidden">
      <div className='w-1/4 h-screen'>
      <div className='p-2'>
      <Image src={'/assets/Frame 18.png'} alt='trackage logo' width={200} height={200} />
      </div>
      <ul className='bg-blue-50 h-screen'>

        <li className={`cursor-pointer mb-8 flex items-center text-xl${activeTab === "/dashboard" ? " bg-blue-100" : ""} pl-8 pt-8 `}
        >
          <MdHomeFilled className='text-blue-800'/> 
          <Link href={"/dashboard"} className='ml-4'>Dashboard</Link> 
       </li>

          <li className={`cursor-pointer mb-8 flex items-center text-xl ${activeTab === "/orders" ? "  bg-blue-100" : ""} pl-8 p-2`}
            >
          <BiSolidPackage  className='text-blue-800'/>
          <Link href={"/orders"} className='ml-4 flex-grow'>My Orders</Link> </li>

          <li className={`cursor-pointer mb-8 flex items-center text-xl ${activeTab === "/history" ? "border-t border-b bg-blue-100" : ""} pl-8 p-2`}
           >
          <MdTrackChanges className='text-blue-800'/>
          <Link href={"/history"} className='ml-4'>Tracking History</Link> </li>

          <li className={`cursor-pointer mb-8 flex items-center text-xl ${activeTab === "/notification" ? "border-t border-b bg-blue-100" : ""} pl-8 p-2`}
           >
          <MdNotifications className='text-blue-800'/>
          <Link href={"/notification"} className='ml-4'>Notification</Link> </li>
          <li className={`cursor-pointer mb-8 flex items-center text-xl ${activeTab === "/settings" ? "border-t border-b bg-blue-100" : ""} pl-8 p-2`}
           >
          <MdOutlineSettings className='text-blue-800'/>
          <Link href={"/settings"} className='ml-4'>Settings</Link>  </li>
          <li className={`cursor-pointer mb-8 flex items-center text-xl ${activeTab === "/helpcenter" ? "border-t border-b bg-blue-100" : ""} pl-8 p-2`}
           >
          <MdOutlineHelp className='text-blue-800'/>
          <Link href={"/helpcenter"} className='ml-4'>Help center</Link>  </li>
          <li className={`cursor-pointer mb-8 flex items-center text-xl ${activeTab === "/userlogout" ? "border-t border-b bg-blue-100" : ""} pl-8 p-2`}
           >
          <MdOutlineLogout className='text-blue-800'/>
          <Link href={"/userlogout"} className='ml-4'>Log Out</Link></li>
      </ul>
      </div>

      <div className='w-3/4 p-10 mt-8'>
        {children}
      </div>
    </aside>
  );
};

export default Userlayout;

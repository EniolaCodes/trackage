import Link from 'next/link';
import Image from 'next/image';
import { BiSolidPackage } from "react-icons/bi";
import { MdTrackChanges, MdOutlineSettings, MdNotifications, MdOutlineHelp, MdOutlineLogout, MdHomeFilled} from "react-icons/md";

const Adminlayout = ({children}) => {
  return (
    <aside className="flex  h-screen ">
      <div className='w-1/4'>
      <div className='mt-4 mb-8'>
      <Image src={'/assets/Frame 18.png'} alt='trackage logo' width={200} height={200} />
      </div>
      <ul className='bg-blue-50 h-screen p-8'>
        <li className='mb-8 flex items-center text-xl hover:te'>
        <MdHomeFilled className='text-blue-800'/> 
        <Link href={"/admindashboard"} className='ml-4'>Dashboard</Link> </li>

          <li className='mb-8 flex items-center text-xl'>
          <BiSolidPackage  className='text-blue-800'/>
          <Link href={"/trackingoverview"} className='ml-4'>Package Management</Link> </li>

          <li className='mb-8 flex items-center text-xl'>
          <BiSolidPackage  className='text-blue-800'/>
          <Link href={"/packagemanagement"} className='ml-4'>Tracking Overview</Link> </li>
       
          <li className='mb-8 flex items-center text-xl'>
          <BiSolidPackage  className='text-blue-800'/>
          <Link href={"/usermanagement"} className='ml-4'>User Management</Link> </li>
          <li className='mb-8 flex items-center text-xl'>
          <MdNotifications className='text-blue-800'/>
          <Link href={"/adminnotification"} className='ml-4'>Notification</Link> </li>

          <li className='mb-8 flex items-center text-xl'>
          <MdOutlineSettings className='text-blue-800'/>
          <Link href={"/adminsettings"} className='ml-4'>Settings</Link>  </li>

          <li className='mb-8 flex items-center text-xl'>
          <MdOutlineHelp className='text-blue-800'/>
                    <Link href={"/adminhelpcenter"} className='ml-4'>Help center</Link>  </li>

          <li className='mb-8 flex items-center text-xl'>
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

export default Adminlayout;







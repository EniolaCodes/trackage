import Link from 'next/link';
import Image from 'next/image';
import { BiSolidPackage } from "react-icons/bi";
import { MdTrackChanges, MdOutlineSettings, MdNotifications, MdOutlineHelp, MdOutlineLogout, MdHomeFilled} from "react-icons/md";

const SideMenu = () => {
  return (
    <aside className="sidemenu  h-screen w-64 flex  flex-col justify-between">
      <div className='mt-4 mb-8'>
      <Image src={'/assets/Frame 18.png'} alt='trackage logo' width={200} height={200} />
      </div>
      <ul className='bg-blue-50 h-screen p-8'>
        <li className='mb-8 flex items-center text-xl hover:te'>
        <MdHomeFilled className='text-blue-800'/> 
        <Link href={"/dashboard"} className='ml-4'>Dashboard</Link> </li>

          <li className='mb-8 flex items-center text-xl'>
          <BiSolidPackage  className='text-blue-800'/>
          <Link href={"/orders"} className='ml-4'>My Orders</Link> </li>
          <li className='mb-8 flex items-center text-xl'>
          <MdTrackChanges className='text-blue-800'/>
          <Link href={"/history"} className='ml-4'>Tracking History</Link> </li>
          <li className='mb-8 flex items-center text-xl'>
          <MdNotifications className='text-blue-800'/>
          <Link href={"/notification"} className='ml-4'>Notification</Link> </li>
          <li className='mb-8 flex items-center text-xl'>
          <MdOutlineSettings className='text-blue-800'/>
          <Link href={"/settings"} className='ml-4'>Settings</Link>  </li>
          <li className='mb-8 flex items-center text-xl'>
          <MdOutlineHelp className='text-blue-800'/>
                    <Link href={"/helpcenter"} className='ml-4'>Help center</Link>  </li>
          <li className='mb-8 flex items-center text-xl'>
          <MdOutlineLogout className='text-blue-800'/>
          <Link href={"/logout"} className='ml-4'>Log Out</Link></li>
      </ul>
    </aside>
  );
};

export default SideMenu;

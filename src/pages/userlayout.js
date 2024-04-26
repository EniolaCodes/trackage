import Image from 'next/image';
import MenuItem from '@/components/MenuItem';
import ProfileImg from '../../public/assets/profile2.jpg'
import { useEffect, useState } from 'react';
import { BiSolidPackage } from 'react-icons/bi';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useRouter } from 'next/router';
import {
  MdTrackChanges,
  MdOutlineSettings,
  MdNotifications,
  MdOutlineHelp,
  MdOutlineLogout,
  MdHomeFilled,
} from 'react-icons/md';
import Link from 'next/link';

const Userlayout = ({ children }) => {
  const [activeTab, setActiveTab] = useState('/dashboard');
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const router = useRouter();

  useEffect(() => {
    setActiveTab(router.pathname);
  }, [router.pathname]);

  return (
    <aside className="flex flex-col min-h-full  md:flex-row">
      <div className="bg-blue-50 min-h-full md:w-1/4 md:h-screen">
        <div className="flex items-center justify-between p-4">
          <Link href="/">
            <Image src={'/assets/Frame 18.png'} alt="trackage logo" width={200} height={200} />
          </Link>
            
         
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
        <ul className='hidden md:block'>
          <MenuItem active={activeTab === '/dashboard'} href="/dashboard" icon={<MdHomeFilled />} >
            Dashboard
          </MenuItem>
          <MenuItem active={activeTab === '/orders'} href="/orders" icon={<BiSolidPackage />} >
            My Orders
          </MenuItem>
          <MenuItem active={activeTab === '/history'} href="/history" icon={<MdTrackChanges />} >
            Tracking History
          </MenuItem>
          <MenuItem active={activeTab === '/notification'} href="/notification" icon={<MdNotifications />} >
            Notification
          </MenuItem>
          <MenuItem active={activeTab === '/settings'} href="/settings" icon={<MdOutlineSettings />}  >
            Settings
          </MenuItem>
          <MenuItem active={activeTab === '/helpcenter'} href="/helpcenter" icon={<MdOutlineHelp />}  >
            Help Center
          </MenuItem>
          <MenuItem active={activeTab === '/userlogout'} href="/userlogout" icon={<MdOutlineLogout />}  >
            Log Out
          </MenuItem>
        </ul>
      </div>

      {/* Menu Overlay */}
      <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
        <div
          className={
            nav
              ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }
        >
          <div>
            <div className="flex w-full items-center justify-between mb-6">
              <Link href="/">
                <Image src={'/assets/Frame 18.png'} alt="trackage logo" width={150} height={150} />  
              </Link>
              <div onClick={handleNav} className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
                <AiOutlineClose />
              </div>
            </div>
            <ul className="flex flex-col">
              <MenuItem active={activeTab === '/dashboard'} href="/dashboard" icon={<MdHomeFilled />} onClick={() => setNav(false)} >
                Dashboard
              </MenuItem>
              <MenuItem active={activeTab === '/orders'} href="/orders" icon={<BiSolidPackage />}onClick={() => setNav(false)}>
                My Orders
              </MenuItem>
              <MenuItem active={activeTab === '/history'} href="/history" icon={<MdTrackChanges />}onClick={() => setNav(false)} >
                Tracking History
              </MenuItem>
              <MenuItem active={activeTab === '/notification'} href="/notification" icon={<MdNotifications />}onClick={() => setNav(false)}>
                Notification
              </MenuItem>
              <MenuItem active={activeTab === '/settings'} href="/settings" icon={<MdOutlineSettings />} onClick={() => setNav(false)}>
                Settings
              </MenuItem>
              <MenuItem active={activeTab === '/helpcenter'} href="/helpcenter" icon={<MdOutlineHelp />} onClick={() => setNav(false)}>
                Help Center
              </MenuItem>
              <MenuItem active={activeTab === '/userlogout'} href="/userlogout" icon={<MdOutlineLogout />} onClick={() => setNav(false)}>
                Log Out
              </MenuItem>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full p-6 md:w-3/4 md:p-10">{children}</div>
    </aside>
  );
};

export default Userlayout;

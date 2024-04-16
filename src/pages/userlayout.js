import Image from 'next/image';
import MenuItem from '@/components/MenuItem';
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
    <aside className="flex flex-col md:flex-row overflow-hidden">
      <div className="bg-blue-50 w-full md:w-1/4 min-h-screen md:h-auto md:border-r border-gray-200">
        <div className="flex items-center justify-between p-4 md:p-8">
          <div>
            <Image src={'/assets/Frame 18.png'} alt="trackage logo" width={200} height={200} />
          </div>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
        <ul className={`space-y-2 ${nav ? '' : 'hidden md:block'}`}>
          <MenuItem active={activeTab === '/dashboard'} href="/dashboard" icon={<MdHomeFilled />} onClick={handleNav}>
            Dashboard
          </MenuItem>
          <MenuItem active={activeTab === '/orders'} href="/orders" icon={<BiSolidPackage />} onClick={handleNav}>
            My Orders
          </MenuItem>
          <MenuItem active={activeTab === '/history'} href="/history" icon={<MdTrackChanges />} onClick={handleNav}>
            Tracking History
          </MenuItem>
          <MenuItem active={activeTab === '/notification'} href="/notification" icon={<MdNotifications />} onClick={handleNav}>
            Notification
          </MenuItem>
          <MenuItem active={activeTab === '/settings'} href="/settings" icon={<MdOutlineSettings />} onClick={handleNav}>
            Settings
          </MenuItem>
          <MenuItem active={activeTab === '/helpcenter'} href="/helpcenter" icon={<MdOutlineHelp />} onClick={handleNav}>
            Help Center
          </MenuItem>
          <MenuItem active={activeTab === '/userlogout'} href="/userlogout" icon={<MdOutlineLogout />} onClick={handleNav}>
            Log Out
          </MenuItem>
        </ul>
      </div>

      {/* Menu Overlay */}
      <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : 'hidden'}>
        <div
          className={
            nav
              ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Image src={'/assets/Frame 18.png'} alt="trackage logo" width={150} height={150} />
              <div onClick={handleNav} className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
                <AiOutlineClose />
              </div>
            </div>
            <ul className="space-y-2 flex flex-col">
              <MenuItem active={activeTab === '/dashboard'} href="/dashboard" icon={<MdHomeFilled />} onClick={handleNav}>
                Dashboard
              </MenuItem>
              <MenuItem active={activeTab === '/orders'} href="/orders" icon={<BiSolidPackage />} onClick={handleNav}>
                My Orders
              </MenuItem>
              <MenuItem active={activeTab === '/history'} href="/history" icon={<MdTrackChanges />} onClick={handleNav}>
                Tracking History
              </MenuItem>
              <MenuItem active={activeTab === '/notification'} href="/notification" icon={<MdNotifications />} onClick={handleNav}>
                Notification
              </MenuItem>
              <MenuItem active={activeTab === '/settings'} href="/settings" icon={<MdOutlineSettings />} onClick={handleNav}>
                Settings
              </MenuItem>
              <MenuItem active={activeTab === '/helpcenter'} href="/helpcenter" icon={<MdOutlineHelp />} onClick={handleNav}>
                Help Center
              </MenuItem>
              <MenuItem active={activeTab === '/userlogout'} href="/userlogout" icon={<MdOutlineLogout />} onClick={handleNav}>
                Log Out
              </MenuItem>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full md:w-3/4 p-4 md:p-10 mt-8">{children}</div>
    </aside>
  );
};

export default Userlayout;

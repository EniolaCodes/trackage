import Image from 'next/image';
import MenuItem from '@/components/MenuItem';
import { useEffect, useState } from 'react';
import { BiSolidPackage } from "react-icons/bi";
import { MdTrackChanges, MdOutlineSettings, MdNotifications, MdOutlineLogout, MdHomeFilled} from "react-icons/md";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useRouter } from 'next/router';


const Adminlayout = ({ children }) => {
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
        <div className="flex items-center justify-between p-4">
          <div>
            <Image src={'/assets/Frame 18.png'} alt="trackage logo" width={200} height={200} />
          </div>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
        <ul className='hidden:md:block'>
          <MenuItem active={activeTab === '/dashboard'} href="/dashboard" icon={<MdHomeFilled />}>
            Dashboard
          </MenuItem>
          <MenuItem active={activeTab === '/trackingoverview'} href="/trackingoverview" icon={<BiSolidPackage />}>
               Package Management
              </MenuItem>
              <MenuItem active={activeTab === '/packagemanagement'} href="/packagemanagement" icon={<MdTrackChanges />}>
                Tracking Overview
              </MenuItem>
          <MenuItem active={activeTab === '/adminnotification'} href="/adminnotification" icon={<MdNotifications />}>
            Notification
          </MenuItem>
          <MenuItem active={activeTab === '/adminsettings'} href="/adminsettings" icon={<MdOutlineSettings />}>
            Settings
          </MenuItem>
          <MenuItem active={activeTab === '/adminlogout'} href="/adminlogout" icon={<MdOutlineLogout />}>
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
            <ul className="flex flex-col">
              <MenuItem active={activeTab === '/admindashboard'} href="/dashboard" icon={<MdHomeFilled />} >
                Dashboard
              </MenuItem>
              <MenuItem active={activeTab === '/trackingoverview'} href="/trackingoverview" icon={<BiSolidPackage />} >
               Package Management
              </MenuItem>
              <MenuItem active={activeTab === '/packagemanagement'} href="/packagemanagement" icon={<MdTrackChanges />} >
                Tracking Overview
              </MenuItem>
              <MenuItem active={activeTab === '/adminnotification'} href="/adminnotification" icon={<MdNotifications />} >
                Notification
              </MenuItem>
              <MenuItem active={activeTab === '/adminsettings'} href="/adminsettings" icon={<MdOutlineSettings />} >
                Settings
              </MenuItem>
              <MenuItem active={activeTab === '/adminlogout'} href="/adminlogout" icon={<MdOutlineLogout />} >
                Log Out
              </MenuItem>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full md:w-3/4 p-10">{children}</div>
    </aside>
  );
};

export default Adminlayout;

import Link from 'next/link';

const SideMenu = () => {
  return (
    <aside className="sidemenu bg-blue-800 text-white  h-screen w-64 flex flex-start flex-col justify-between">
      <ul className='mt-6'>
        <li className='mb-4'>
          <Link href={"/dashboard"}>Dashboard</Link> </li>
          <li className='mb-4'>
          <Link href={"/orders"}>My Orders</Link> </li>
          <li className='mb-4'>
          <Link href={"/history"}>Tracking History</Link> </li>
          <li className='mb-4'>
          <Link href={"/notification"}>Notification</Link> </li>
          <li className='mb-4'>
          <Link href={"/settings"}>Settings</Link> </li>
          <li className='mb-4'>
          <Link href={"/helpcenter"}>Help center</Link> </li>
          <li className='mb-4'>
          <Link href={"/logout"}>Log Out</Link> </li>
      </ul>
    </aside>
  );
};

export default SideMenu;

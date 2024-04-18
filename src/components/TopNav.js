import Image from 'next/image';
import Link from 'next/link';
import ProfileImg from '../../public/assets/profile2.jpg'

const TopNav = () => {
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between">
        <span className="text-xl">Welcome, <span className='font-semibold'>Chiamanda</span></span>
        <Link href="/profile" className="flex items-center justify-between mb-4">
            <h3 className="mr-4 text-lg font-semibold">Chiamanda</h3>
            <Image src={ProfileImg} alt='/' width={24} height={24} className='rounded-full
             hover:scale-110 ease-in duration-300 '/>
        </Link>
      </div>
    </div>
  );
};

export default TopNav;

import Image from 'next/image';
import Link from 'next/link';
import ProfileImg from '../../public/assets/profile2.jpg'

const TopNav = () => {
  return (
    <div className="mb-6">
      <div className="flex md:items-center justify-between">
        <span className="text-lg md:text-2xl">Welcome, <span className='font-semibold'>Chiamanda</span></span>
        <Link href="/profile" className="flex md:items-center md:justify-between mb-4">
            <Image src={ProfileImg} alt='/' width={24} height={24} className='rounded-full
              hover:scale-110 ease-in duration-300 '/>
        </Link>
      </div>
    </div>
  );
};

export default TopNav;

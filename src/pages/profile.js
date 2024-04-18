import Image from 'next/image';
import ProfileImg from '../../public/assets/profile2.jpg';
import Link from 'next/link';

const Profile = () => {
  return (
    <div className="container mt-20 mx-auto">
         <h1 className="text-xl text-center font-semibold mb-6">Account Information</h1>
      <div className='flex flex-col justify-center items-center md:flex-row '>
        <div className='mb-4 md:mr-12'>
          <Image src={ProfileImg} alt='profile' width={150} height={20} className='rounded-sm hover:scale-110 ease-in duration-300'/>
        </div>
        <div className='flex flex-col '>
            <div className="mb-4">
              <p className="text-lg font-semibold">Name:</p>
              <p className="text-gray-700">Chiamanda Okafor</p>
            </div>
            <div className="mb-4">
              <p className="text-lg font-semibold">Email:</p>
              <p className="text-gray-700">chiamandaokafor@gmail.com</p>
            </div>
            <div className='mb-4'>
                <p className="text-lg font-semibold">Address:</p>
              <p className="text-gray-700">24, Breadford Street, Apapa, Lagos.</p>
         </div>
         <div className="mb-4">
              <p className="text-lg font-semibold">Phone Number:</p>
              <p className="text-gray-700">+1234567890</p>
            </div>
          </div>
          
      </div>
      <Link href="/settings" className='flex justify-center'>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600">
            Edit Profile
          </button>
      </Link>
     
    </div>
  );
};

export default Profile;

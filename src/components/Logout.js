import Link from 'next/link';


const Logout = () => {
  
  return (
   
      <div className="bg-blue-100 p-8 rounded-lg shadow-md w-full h-[40%] mt-16">
        <p className="text-xl font-semibold mb-4 text-center">Are you sure you want to logout?</p>
        <div className="flex justify-center">
          <Link href="/"  className="bg-blue-500 text-white px-4 py-2 rounded-md mr-4 hover:bg-blue-600">Yes
          </Link>
          <Link href="/" className=" border border-orange-500 text-orange-500 px-4 py-2 rounded-md hover:bg-orange-600 hover:text-white">No
          </Link>
        </div>
      </div>
  
  );
};

export default Logout;

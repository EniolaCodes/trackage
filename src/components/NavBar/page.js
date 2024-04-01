import Image from "next/image";

const Navbar = () => {
    return (
      <nav className="bg-gray-800 p-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <Image src={'/assets/Frame 18.png'} alt="trackage-logo" width={200} height={200} />
          <div className="flex items-center w-full md:w-auto border border-white rounded-lg px-3 py-1">
            <svg className="w-6 h-6 text-white mr-2 hidden md:block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l4.5 4.5M10 18V8a2 2 0 0 1 2-2h5"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 3v2a6 6 0 0 1 6 6h-2M18 21a6 6 0 0 1-6-6"></path>
            </svg>
            <input type="text" placeholder="Search" className="bg-transparent text-white focus:outline-none w-full md:w-auto" />
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  
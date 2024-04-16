import Link from "next/link";

const MenuItem = ({ active, href, icon, children}) => {
   
  
    return (
      <li
        className={`cursor-pointer flex items-center text-lg p-2 md:p-4 ${active ? 'bg-blue-100' : ''}`}
      >
        {icon}
        <Link href={href} passHref className="ml-4">
          {children}
        </Link>
      </li>
    );
  };
export default MenuItem  
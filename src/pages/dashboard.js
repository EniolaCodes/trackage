import GoogleMaps from "@/components/GoogleMaps"
import Userlayout from "./userlayout"
import TopNav from "@/components/TopNav"
import Link from "next/link"

const Dashboard = () => {
  return (
    <Userlayout>
      <TopNav />
      <div className="flex flex-col">
      <Link href="/placeorder" className="flex justify-end mb-8">
          <button className="text-sm bg-blue-500 text-white px-4 py-2 rounded-md shadow-md md:text-lg">Create New Package</button>
        </Link>
        <div className="flex justify-end mb-6">
    <input
      type="text"
      placeholder="Input Tracking Id"
      className="border border-gray-300 rounded-md px-4 py-2 mr-2 text-sm"
    />
    <button className="bg-blue-500 text-lg text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600" >
      Search
    </button>
  </div>
      
        <div className="flex flex-col md:flex-row justify-between mb-12">
       
          <Link href="/orders" className="flex-1 text-lg text-center items-center bg-blue-100 border-t border-b p-4 rounded-md mb-4 mr-0 md:mr-4 md:mb-0">
            <p>Ongoing Delivery</p>
            <p>48</p>
          </Link>
          <Link href="/history" className="flex-1 text-lg text-center bg-blue-500 border-t border-b p-4 rounded-md mb-4 mr-0 md:mr-4 md:mb-0">
            <p>Completed Delivery</p>
            <p>41</p>
          </Link>
          <Link href="/orders" className="flex-1 text-lg text-center bg-orange-400 border-t border-b p-4 rounded-md mb-4 mr-0 md:mr-4 md:mb-0">
            <p>Pending Delivery</p>
            <p>7</p>
          </Link>
        </div>
          <GoogleMaps />
      </div>
    </Userlayout>
  )
}

export default Dashboard

// import SideMenu from "@/components/SideMenu/page";
import { Inter } from "next/font/google";
import Signin from "./signin";
import Navbar from "@/components/NavBar/page";




const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
      <div>
        {/* <Signin/> */}
        {/* <SideMenu/> */}
        <Navbar/>
      </div>
       
      
    );
  }






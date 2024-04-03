import SideMenu from "@/components/SideMenu/page";
import { Inter } from "next/font/google";
import Signin from "./signin";
// import Helpcenter from "./helpcenter";
import Settings from "./settings";





const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
      <div>
        {/* <Signin/> */}
        {/* <SideMenu/> */}
        {/* <Helpcenter/> */}
        <Settings/>
     
      </div>
       
      
    );
  }






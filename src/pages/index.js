import { Inter } from "next/font/google";
import LandingPage from "./home";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
      <div>
        <LandingPage/>
      </div>
          
    );
  }






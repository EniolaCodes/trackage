import GoogleMaps from "@/components/GoogleMaps"
import Userlayout from "./userlayout"
import TopNav from "@/components/TopNav"



const Dashboard = () =>{
  return(
    <Userlayout>
      <TopNav/>
      <GoogleMaps/>
    </Userlayout>
  )
}

export default Dashboard
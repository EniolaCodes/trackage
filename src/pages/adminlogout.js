import TopNav from "@/components/TopNav"
import Adminlayout from "./adminlayout"
import Logout from "@/components/Logout"



const Adminlogout =() =>{
    return(
        <Adminlayout>
            <TopNav/>
            <Logout/>
        </Adminlayout>
    )
}
export default Adminlogout
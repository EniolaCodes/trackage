import SideMenu from "@/components/SideMenu/page";
import "../styles/globals.css";
import {SessionProvider} from "next-auth/react"

export default function App({ Component, pageProps }) {

  return(
    <SessionProvider session={pageProps.session}>
    {/* <div className="flex"> */}
        {/* <SideMenu/> */}
        {/* <div className="flex-1"> */}
        <Component{...pageProps}/>
        {/* </div> */}
    {/* </div> */}
    </SessionProvider>
  )

}

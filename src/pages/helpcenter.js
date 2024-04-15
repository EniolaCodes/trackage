import FAQContainer from "@/components/FAQContainer"
import Userlayout from "./userlayout";
import { FaRocketchat, FaPhone } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import Link from "next/link";

const Helpcenter =() => {
  return (
    <Userlayout>
    <div className="">
      <div className="bg-blue-800 text-white text-xl rounded p-4 tracking-tight leading-8">
        <h2 className="mb-6 text-2xl">Help Center</h2>
        <p className="mb-3">We understand that you may have questions about using our service, and we are here to help while we continually update
          our FAQs to provide you with the most relevant information.</p>
        <p>If you don&#39;t find what you are looking for, don&#39;t hesitate to reach out to our support team for personalized assistance. 
          Your satisfaction is our top priority, and we are committed to providing you with the support you need to make the most of our service.</p>
      </div>
      <h1 className="text-2xl text-left my-8">FREQUENTLY ASKED QUESTIONS</h1>
      <FAQContainer />
    </div>
    <div className="mt-8">
      <h3 className="text-xl">For More Information, Contact Us</h3>
      <div className="flex justify-between mt-4">
        <Link href="#" className="flex items-center gap-2 text-blue-600"> <FaRocketchat/> Chat with Support</Link>
        <Link href="#" className="flex items-center gap-2 text-blue-600"> <FaPhone/> +234912 345 6890</Link>
        <Link href="#" className="flex items-center gap-2 text-blue-600"><CiMail /> Trackagesupport@gmail.com</Link>  
      </div> 
        </div>
    </Userlayout>


  )
}

export default Helpcenter

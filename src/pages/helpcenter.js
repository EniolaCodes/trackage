import FAQContainer from "@/components/FAQContainer"
import Userlayout from "./userlayout"

const Helpcenter =() => {
  return (
    <Userlayout>
    <div className="">
      <div className="bg-blue-800 text-white text-xl rounded p-4 tracking-tight leading-8">
        <h2 className="mb-6">Help Center</h2>
        <p className="mb-3">We understand that you may have questions about using our service, and we are here to help while we continually update
           our FAQs to provide you with the most relevant information.</p>
        <p>If you don`&apos`t find what you are looking for, don`&apos`t hesitate to reach out to our support team for personalized assistance. 
          Your satisfaction is our top priority, and we are committed to providing you with the support you need to make the most of our service.</p>
        <div className="mt-6 flex justify-between">
          <button className="border-2 py-2 px-4 rounded">Chat with Support</button>
          <a href="#" className="underline">+2349123456789</a>
          <a href="#" className="underline">Trackagesupport@gmail.com</a>
        </div>
      </div>
      <h1 className="text-3xl font-semibold text-left my-8">FREQUENTLY ASKED QUESTIONS</h1>
      <FAQContainer />
    </div>
    </Userlayout>


  )
}

export default Helpcenter

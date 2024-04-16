import FAQContainer from '@/components/FAQContainer';
import Userlayout from './userlayout';
import { FaRocketchat, FaPhone } from 'react-icons/fa';
import Chatbox from './Chatbox';
import { MdEmail } from "react-icons/md";
import Link from 'next/link';

const Helpcenter = () => {
  return (
    <Userlayout>
      <div className="flex flex-col md:flex-row justify-between mb-8">
        <div className="text-blue-700 text-lg bg-blue-100 border-t border-b p-4 rounded-md mr-0 md:mr-4 md:mb-0">
          <Link href="/chatbox" className="">
            <FaRocketchat size={25} />
            <h3 className="mb-6 font-bold mt-2">Chat with Support</h3>
            <p>Our team is here to assist you. Reach out to us anytime for help.</p>
          </Link>
        </div>
        <div className="text-blue-700 text-lg bg-blue-100 border-t border-b p-4 rounded-md mr-0 md:mr-4 md:mb-0">
          <Link href="#" className="">
            <FaPhone size={25} />
            <h3 className="font-bold mt-2">Contact Trackage</h3>
            <h3 className="mb-6 font-bold">1-800-123-4567</h3>
            <p>Our team is here to assist you. Reach out to us anytime for help.</p>
          </Link>
        </div>
        <div className="text-blue-700 text-lg bg-blue-100 border-t border-b p-4 rounded-md">
          <Link href="#" className="">
            <MdEmail size={25} />
            <h3 className="font-bold mt-2">Send us a Mail</h3>
            <h3 className="mb-6 font-bold">Trackagesupport@gmail.com</h3>
            <p>Our Support agents are standing by to assist you. We are just a chat/email away</p>
          </Link>
        </div>
      </div>
      <h1 className="text-2xl text-left my-8">FREQUENTLY ASKED QUESTIONS</h1>
      <FAQContainer />
    </Userlayout>
  );
};

export default Helpcenter;

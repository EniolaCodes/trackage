'use client'
import Link from "next/link";
import { useRouter } from "next/router";
import Image from 'next/image'
import { HiAtSymbol, HiFingerPrint, HiOutlineUser } from "react-icons/hi";
import { useState } from 'react';


export default function Signup(){
    const [show, setShow] = useState(false);
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const router = useRouter();

    const handleSubmit =  (e) => {
        e.preventDefault();
        if (!email || !password || !username) {
            setError("Please enter all fields.");
            return;
        }
        router.push('/signin')
    }
    
    return(
        <main className='flex flex-col min-h-screen bg-gray-100'>
            <section className='flex-1 items-center justify-center'>
                <div className='p-6 md:p-12'>
                    <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
                    <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>Create Your Account</h2>
                    <p className='mt-2 text-center text-xl text-gray-700'>Stay Connected, Every Step of the Way</p>
                </div>
                <div className="mt-4 flex justify-center items-center">
                    <button type="button" className=" rounded-md flex items-center md:justify-center px-4 py-1.5 text-sm sm:mx-auto sm:w-full sm:max-w-sm 
                        text-orange-400 border border-solid border-orange-400 shadow-sm hover:bg-orange-300 hover:text-white">
                        <Image src={'/assets/google.svg'} alt="google image" width="20" height={20} className="mr-2" ></Image>
                        Sign up with Google
                    </button>
                </div>
                <div className="flex items-center sm:mx-auto sm:w-full sm:max-w-sm mt-4">
                    <div className="flex-1 border-t-2 border-gray-200"></div>
                    <span className="px-3 text-gray-900">or</span>
                    <div className="flex-1 border-t-2 border-gray-200"></div>
                </div>
                <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
                    <form onSubmit={handleSubmit}>
                        <div className='mt-4'>
                            <div className="relative">
                                <label htmlFor='Name' className="block font-medium leading-6 text-lg text-gray-800">Username: </label>
                                <input name="name" type="name" value={username}
                                onChange={(e) => setUserName(e?.target?.value)}
                                placeholder="Enter Your userame" className="block w-full rounded-md border-0 mt-2 text-sm
                                py-1.5 pl-2 text-gray-900 
                                shadow-sm ring-1 ring-insert ring-gray-300 placeholder:text-gray-400 focus:ring-2 
                                focus:ring-insert focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                                <div className='absolute inset-y-12 right-0 flex items-center pr-3 text-gray-200'>
                                <HiOutlineUser size={25} /></div>
                            </div>
                            <div className="mt-6 relative">
                                <label htmlFor='email' className="block font-medium leading-6 text-lg text-gray-800">Email: </label>
                                <input name="email" type="email" value={email} onChange={(e) => setEmail(e?.target?.value)}
                                    placeholder="LauranSomebody@gmail.com" className="block w-full rounded-md border-0 mt-2 text-sm
                                    py-1.5 pl-2 text-gray-900 
                                    shadow-sm ring-1 ring-insert ring-gray-300 placeholder:text-gray-400 focus:ring-2 
                                focus:ring-insert focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                                <div className='absolute inset-y-12 right-0 flex items-center pr-3 text-gray-100' > <HiAtSymbol size={25} /></div>
                            </div>
                            
                            <div className="mt-6 relative">
                        <label htmlFor='password' className="block font-medium leading-6 text-lg text-gray-800">Password: </label>
                        <input name="password"  type={`${show ? "text" : "password"}`}placeholder="**********" value={password} onChange={(e) => setPassword(e?.target?.value)}   
                            className="block w-full rounded-md border-0 mt-2 text-sm py-1.5 pl-2 text-gray-900  shadow-sm ring-1 ring-insert ring-gray-300 placeholder:text-gray-400 focus:ring-2 
                                focus:ring-insert focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                         <span
                            className="absolute inset-y-12 right-0 flex items-center pr-2 cursor-pointer text-gray-100 hover:text-gray-300"  onClick={() => setShow(!show)}   >
                                {show ? <HiFingerPrint size={25} /> : <HiFingerPrint size={25} />}   
                         </span>
                    </div>

                            <div className="mt-6 flex items-start">
                                    <input type="checkbox" className="mx-1.5 block w-8 h-10 rounded-sm bg-white border-4 cursor-pointer"/>
                                    <label className="text-xs">By clicking Signup, you are agreeing to the <a href="#" className="text-indigo-600 hover:text-indigo-500 text-xs">Terms, Conditions & Privacy policy of Trackage</a></label>
                                </div>
                                <div className="mt-6">
                                    <button 
                                    type="submit"
                                    className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-lg font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offest-2 focus-visible:outline-indigo-600"
                                    >
                                    Sign Up
                                    </button>
                                    <p className="text-red-600 text-l mb-8">{error && error}</p>
                                </div>
                                <div className="mt-6 flex justify-center">
                                    <p className="text-sm mr-4">Already have an account? </p>
                                    <Link href="/signin" className="text-indigo-600 hover:text-indigo-500 text-sm"   
                                    >  Sign in
                                    </Link> 
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    
   ); 
}

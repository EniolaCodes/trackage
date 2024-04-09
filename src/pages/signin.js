'use client';
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { HiAtSymbol, HiFingerPrint } from "react-icons/hi";
import { useState } from "react";






export default function Signin(){
    const [show, setShow] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const router = useRouter();

    const handleLogin = async (e) => {
      e.preventDefault();
  
      try {
        const response = await fetch(
          "/api/users/login",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
          }
        );
  
        if (!response.ok) {
          const data = await response.json();
          throw new Error(data.error);
        }
  
        const userData = await response.json();
        localStorage.setItem("userData", JSON.stringify(userData));
        router.push("/dashboard")
        // Login successful, navigate to dashboard or perform other actions
        console.log("Login successful");
      } catch (error) {
        setError(error.message);
      }
    };
    



    return(
        <main className='flex flex-col md:flex-row min-h-screen bg-gray-100'>
        <section className='flex-1 items-center justify-center md:items-start bg-white'>
        
      
        </section>
          
            <section className='flex-1 items-center justify-center md:items-start bg-white'>
            <div className='p-6 md:p-12'>
                    <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
                       
                        <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>Sign in</h2>
                        <p className='mt-2 text-center text-xl text-gray-700'>Stay Connected, Every Step of the Way</p>
                    </div>
                    <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
                    {error && <div className={styles.error}>{error}</div>}
                        <form onSubmit={handleLogin}>
                            <div className='mt-4'>
                            <div className="mt-6 relative">
                                <label htmlFor='email' className="block font-medium leading-6 text-l text-gray-800">Email: </label>
                                <input  name="email"  type="email" value={email} onChange={(e) => setEmail(e?.target?.value)}   className="block w-full rounded-md border-0 mt-2
                                py-1.5 pl-2 text-gray-900 
                             shadow-sm ring-1 ring-insert ring-gray-300  focus:ring-2 
                                focus:ring-insert focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                                
                                
/>
<span className='absolute inset-y-12 right-0 flex items-center pr-3 text-gray-200'>
                        <HiAtSymbol size={25} />
                    </span>
                  



                                </div>
                                <div className="mt-6 relative">
                                <label htmlFor='password' className="block font-medium leading-6 text-l text-gray-800">Password: </label>
                                <input name="password"   
 type={`${show ? "text" : "password"}`}
 placeholder="**********"
 value={password} onChange={(e) => setPassword(e?.target?.value)}   
                                  className="block w-full rounded-md border-0 mt-2
                                py-1.5 pl-2 text-gray-900 
                             shadow-sm ring-1 ring-insert ring-gray-300 placeholder:text-gray-400 focus:ring-2 
                                focus:ring-insert focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                                                    <span className='absolute inset-y-12 right-0 flex items-center pr-3 text-gray-100 cursor-pointer hover:text-gray-300' onClick={() => setShow(!show)} >
                        <HiFingerPrint size={25} />
                    </span>
                  

                                </div>
                                <div className="flex justify-between mt-4">
                                    <span className="flex items-center">
                                    <input type="checkbox" className="mr-2 h-4 w-4"/>
                                    <label className="font-medium leading-6 text-gray-800">Remember me</label>
                                    </span>
                                    <a href="#"className="leading-6 text-blue-400 font-normal">Forgot Password</a> 
                                </div>
                                <div className="mt-6">
                                    <button 
                                    type="submit"
                                    className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-l font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offest-2 focus-visible:outline-indigo-600"
                                    >
                                      Sign in
                                    </button>
                                </div>
                                <div className="flex items-center sm:mx-auto sm:w-full sm:max-w-sm mt-4">
                          <div className="flex-1 border-t-2 border-gray-200"></div>
                            <span className="px-3 text-gray-900">or</span>
                          <div className="flex-1 border-t-2 border-gray-200"></div>
                                </div>
                                <div className="mt-4">
                        <button type="button"  className="flex sm:mx-auto sm:w-full sm:max-w-sm justify-center items-center rounded-md  px-4 py-1.5 text-sm 
                         text-orange-400 border border-solid border-orange-400 shadow-sm hover:bg-orange-300 hover:text-white">
<Image src={'/assets/google.svg'} alt="google image" width="20" height={20} className="mr-2"></Image>
                                   Sign in with Google</button>
                        </div>
                        <div className="mt-6 flex justify-center">
                                    <p className="text-sm mr-4">Dont have an account?</p>
                                    <Link href="/signup"
                                        className="text-indigo-600 hover:text-indigo-500 text-sm">
                                    Sign Up 
                                        </Link>
                                </div>
                            </div>
                        </form>
                    </div>
            </div>
            </section>
        </main>
    )
}
import Link from "next/link";
import Image from "next/image"

const LandingPage = () => {
  return (
    <div className="bg-gradient-to-b from-blue-500 to-blue-700 text-white min-h-screen flex flex-col relative">
    <Image src={'/assets/map.jpg'} alt='map' layout="fill" objectFit="cover" />
    <div className="relative flex-grow">
      <header className="container mx-auto py-8 flex justify-between items-center">
      <Image src={'/assets/Frame 18.png'} alt='trackage logo' width={200} height={200} />
        <nav className="space-x-4">
          <Link href="/adminlayout" className="text-2xl text-blue-400 font-bold hover:underline">Admin</Link>
          <Link href="/userlayout" className="text-2xl text-blue-400 font-bold hover:underline">Member</Link>
        </nav>
      </header>
      <main className="container mx-auto flex flex-col items-center justify-center flex-grow">
        <h2 className="text-5xl font-bold text-center mb-8">Real-Time Package Monitoring</h2>
        <p className="text-3xl text-center mb-12">Track your packages seamlessly with Trackage&#39;s real-time monitoring system. Say goodbye to lost packages and delivery uncertainties.</p>
        <Link href="/signup" className="bg-white text-blue-500 px-8 py-3 rounded-md shadow-lg text-lg hover:bg-blue-100 transition duration-300 ease-in-out">Get Started</Link>
      </main>
    </div>
  </div> 
  );
}


export default LandingPage

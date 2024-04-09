import Link from "next/link";
// import Image from "next/image"

const LandingPage = () => {
  return (
    <div className="bg-gradient-to-b from-blue-500 to-blue-700 text-white min-h-screen flex flex-col">
  <div className="relative flex-grow">
    <header className="container mx-auto py-8 flex justify-between items-center">
      <h1 className="text-4xl font-bold">Trackage</h1>
      <nav className="space-x-4">
        <Link href="/adminlayout" className="text-2xl text-white hover:underline">Admin</Link>
        <Link href="/userlayout" className="text-2xl text-white hover:underline">Member</Link>
      </nav>
    </header>
    <main className="container mx-auto flex flex-col items-center justify-center flex-grow">
      <h2 className="text-5xl font-bold text-center mb-8">Real-Time Package Monitoring</h2>
      <p className="text-lg text-center mb-12">Track your packages seamlessly with Trackage's real-time monitoring system. Say goodbye to lost packages and delivery uncertainties.</p>
      <Link href="/signup" className="bg-white text-blue-500 px-8 py-3 rounded-md shadow-lg hover:bg-blue-100 transition duration-300 ease-in-out">Get Started</Link>
    </main>
  </div>
  <footer className="bg-gray-900 text-white py-4 text-center">
    <p>&copy; {new Date().getFullYear()} Trackage. All rights reserved.</p>
  </footer>
</div>

  );
}


export default LandingPage

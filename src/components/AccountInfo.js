
const AccountInfo = () =>{
    return(
        <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-4">
            <h2 className="text-lg font-semibold mb-4">Profile</h2>
            <h3 className="text-l mb-2">Update your information</h3>
            <form>
                <div className="mb-4">
                    <label className="block mb-1">Name:</label>
                    <input type="name" placeholder="Chiamanda Okafor" className="border px-3 py-2 w-full" />
                </div>
                <div className="mb-4">
                    <label className="block mb-1">Email:</label>
                    <input type="password" placeholder="ChiamandaOkafor@gmail.com" className="border px-3 py-2 w-full" />
                </div>
                <div className="mb-4">
                    <label className="block mb-1">Address:</label>
                    <input type="password" placeholder="24, Breadford Street, Apapa, Lagos"  className="border px-3 py-2 w-full" />
                </div>
                <div className="mb-4">
                    <label className="block mb-1">Phone no:</label>
                    <input type="password" placeholder="+2348145862060"  className="border px-3 py-2 w-full" />
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Save</button>
            </form>
        </div>
    )

}

export default AccountInfo;


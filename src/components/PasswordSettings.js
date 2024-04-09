

const PaswordSetting = () =>{
    return(
        <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-4">
            <h2 className="text-lg font-semibold mb-4">Update Your Password</h2>
            <form>
                <div className="mb-4">
                    <label className="block mb-1">Current Password</label>
                    <input type="password" placeholder="**********" className="border px-3 py-2 w-full" />
                </div>
                <div className="mb-4">
                    <label className="block mb-1">New Password</label>
                    <input type="password" placeholder="set new password" className="border px-3 py-2 w-full" />
                </div>
                <div className="mb-4">
                    <label className="block mb-1">Confirm New Password</label>
                    <input type="password" placeholder="set new password" className="border px-3 py-2 w-full" />
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Save</button>
            </form>
        </div>

    )
}
export default PaswordSetting;
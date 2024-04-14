const Security = () =>{
    return(
        <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-4">
            <h2 className="text-lg font-semibold mb-4">Update Security Settings</h2>
        <div className="flex items-center mb-4">
            <span className="mr-4">Enable Two Factor Authentication</span>
            <label htmlFor="securityToggle" className="flex items-center cursor-pointer">
            <input id="securityToggle" type="checkbox" className="appearance-none w-6 h-6 mr-2 border rounded-full" />
            <span className="w-12 h-6 bg-gray-400 rounded-full"></span>
            </label>
        </div>
        <form>
            <div className="mb-4">
                <div className="flex items-center">
                    <input type="text" className="border px-3 py-2 w-full" />
                    <button className="bg-gray-200 text-gray-600 px-4 py-2 rounded-l hover:bg-gray-300">Set Up</button>
                </div>
            </div>
            <div className="mb-4">
                <div className="flex items-center">
                    <input type="text" className="border px-3 py-2 w-full" />
                    <button className="bg-gray-200 text-gray-600 px-4 py-2 rounded-l hover:bg-gray-300">Set Up</button>
                </div>
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Submit</button>
        </form>
    </div>
    )
}
export default Security;
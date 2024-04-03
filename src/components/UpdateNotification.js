

const UpdateNotification =() => {
    return (
        <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-4">
            <h2 className="text-lg font-semibold mb-4">Update Your Preference</h2>
            <form>
                <div className="mb-4">
                    <label className="block mb-1">Notification Type</label>
                    <select className="border px-3 py-2 w-full">
                        <option value="email">Email</option>
                        <option value="sms">SMS</option>
                    </select>
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Save</button>
            </form>
        </div>

)
}

export default UpdateNotification

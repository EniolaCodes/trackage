import React from 'react';
const ManageUser = ({ Username, Email, Visited }) => {
    return (
                <div className="bg-blue-100 rounded-lg shadow-md mb-4">
            <table className="w-full">
                <thead >
                    <tr>
                        <th className="px-4 py-2 text-center">Username</th>
                        <th className="px-4 py-2 text-center">Email</th>
                        <th className="px-4 py-2 text-center">Visited</th>
                       
                    </tr>
                </thead>
                <tbody >
                    <tr>
                        <td className="px-4 py-2 text-center">{Username}</td>
                        <td className="px-4 py-2 text-center">{Email}</td>
                        <td className="px-4 py-2 text-center">{Visited}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
export default ManageUser;
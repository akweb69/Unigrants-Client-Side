import React from 'react';
import Heading from '../Utilities/Heading';
import useAllUser from '../Hooks/useAllUser';
import Nodatapage from '../Utilities/Nodatapage';

const A_M_Users = () => {
    const [users, refetch, isLoading] = useAllUser();

    return (
        <div className='w-full min-h-screen'>
            <Heading one={"Manage Users"}></Heading>
            <div className="w-11/12 mx-auto">
                {
                    isLoading ? <div className="w-full min-h-[50vh] flex justify-center items-center">
                        <div className="loading loading-bars text-warning text-5xl"></div>
                    </div> :
                        <div className="font-logoFont">
                            {
                                users.length === 0 ? <Nodatapage one={"Opps! There is no user."}></Nodatapage> :

                                    <div className="overflow-x-auto">
                                        {/* Table */}
                                        <table className="table-auto w-full border-collapse border border-gray-300 rounded-lg">
                                            <thead className="bg-blue-500 text-gray-100">
                                                <tr>
                                                    <th className="border text-center border-gray-300 px-4 py-2">Name</th>
                                                    <th className="border text-center border-gray-300 px-4 py-2">Email</th>
                                                    <th className="border text-center border-gray-300 px-4 py-2">Roll</th>
                                                    <th className="border text-center border-gray-300 px-4 py-2">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    users?.map((item, idx) => <tr className="" key={idx}>
                                                        <td className="border text-center py-2">{item?.name}</td>
                                                        <td className="border text-center py-2">{item?.email}</td>
                                                        <td className="border text-center py-2">{item?.role}</td>
                                                        <td className="border text-center py-2">Delete</td>
                                                    </tr>)
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                            }
                        </div>
                }

            </div>

        </div>
    );
};

export default A_M_Users;
import React from 'react';
import Heading from '../Utilities/Heading';
import useAllUser from '../Hooks/useAllUser';
import Nodatapage from '../Utilities/Nodatapage';
import toast from 'react-hot-toast';
import useAxiosSecure from '../Hooks/useAxiosSecure';

const A_M_Users = () => {
    const axiosSecure = useAxiosSecure();
    const [users, refetch, isLoading] = useAllUser();

    const moderatorRole = (id, e) => {

        if (e.target.value === "Moderator") {

            const role = "Moderator"
            axiosSecure.patch(`/update_user_role/?id=${id}&role=${role}`)
                .then(res => {
                    const data = res.data;
                    if (data.modifiedCount > 0) {
                        toast.success("Role Updated Successfully!")
                        refetch()
                    }
                })
                .catch(err => {
                    console.log(err)
                })
        }
        if (e.target.value === "user") {

            const role = "user"
            axiosSecure.patch(`/update_user_role/?id=${id}&role=${role}`)
                .then(res => {
                    const data = res.data;
                    if (data.modifiedCount > 0) {
                        toast.success("Role Updated Successfully!")
                        refetch()
                    }
                })
                .catch(err => {
                    console.log(err)
                })
        }

        if (e.target.value === "Admin") {
            const role = "Admin"
            axiosSecure.patch(`/update_user_role/?id=${id}&role=${role}`)
                .then(res => {
                    const data = res.data;
                    if (data.modifiedCount > 0) {
                        toast.success("Role Updated Successfully!")
                        refetch()
                    }
                })
                .catch(err => {
                    console.log(err)
                })
        }




    }

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
                                                        <td
                                                            className="border  h-full text-center py-2">
                                                            <div className="w-full flex justify-center items-center px-5">
                                                                <select
                                                                    defaultValue={item?.role}
                                                                    onChange={(e) => moderatorRole(item?._id, e)}
                                                                    className='select select-warning bg-transparent  w-32' >

                                                                    <option value="user">User</option>
                                                                    <option
                                                                        value="Moderator">Moderator</option>
                                                                    <option value="Admin">Admin</option>
                                                                </select>
                                                            </div>

                                                        </td>

                                                        <td className="border text-center py-2 ">
                                                            <span className="btn btn-sm btn-warning">Delete</span> </td>
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
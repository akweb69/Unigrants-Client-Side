import React, { useState } from 'react';
import Heading from '../Utilities/Heading';
import useAllUser from '../Hooks/useAllUser';
import Nodatapage from '../Utilities/Nodatapage';
import toast from 'react-hot-toast';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';


const A_M_Users = () => {
    const axiosSecure = useAxiosSecure();
    const [users, refetch, isPending] = useAllUser();
    const [allUsers, setAllUsers] = useState(users)


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

    React.useEffect(() => {
        setAllUsers(users);
    }, [users]);

    // delete user ---->
    const handleDeleteUser = (id, user) => {
        Swal.fire({
            title: `Are you sure delete ${user}?`,
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete user!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/delete_user_by_id/?id=${id}`)
                    .then(res => {
                        const data = res.data;

                        if (data.deletedCount > 0) {
                            toast.success(`Deleted User --> ${user} Successfully!`);
                            refetch().then((updatedData) => {
                                setAllUsers(updatedData);
                                Swal.fire({
                                    title: "Deleted!",
                                    text: `The user ${user} has been deleted.`,
                                    icon: "success"
                                });
                            });
                        }
                    })
                    .catch(err => {
                        toast.error(`Something went wrong. Try again later!`);
                    });
            }
        });
    };



    const handleSort = (value) => {

        if (value === "Moderator") {
            const filtered = users.filter(user => user.role === "Moderator")
            setAllUsers(filtered)
            return;
        }

        if (value === "Admin") {
            const filtered = users.filter(user => user.role === "Admin")
            setAllUsers(filtered)
            toast.success(` Sort By ${value} Role`)
            return;
        }

        if (value === "User") {
            const filtered = users.filter(user => user.role === "user")
            setAllUsers(filtered)
            toast.success(` Sort By ${value} Role`)
            return;
        }

        setAllUsers(users)
        toast.success(` Sort By ${value} Role`)
    }
    console.log("form---->", allUsers)

    return (
        <div className='w-full min-h-screen'>
            <Heading one={"Manage Users"}></Heading>

            <div className="flex w-11/12 mx-auto justify-end items-center mb-4">
                <select
                    onChange={(e) => handleSort(e.target.value)}
                    className='select select-accent bg-transparent' name="sort">
                    <option disabled selected value="">Sort By Default Role</option>
                    <option value="Moderator">Sort By Moderator</option>
                    <option value="Admin">Sort By Admin</option>
                    <option value="User">Sort By User</option>
                </select>
            </div>
            <div className="w-11/12 mx-auto">
                {
                    isPending ? <div className="w-full min-h-[50vh] flex justify-center items-center">
                        <div className="loading loading-bars text-warning text-5xl"></div>
                    </div> :
                        <div className="font-logoFont">
                            {
                                allUsers.length === 0 ? <Nodatapage one={"Opps! There is no user."}></Nodatapage> :

                                    <div className="overflow-x-auto bg-white">
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
                                                    allUsers?.map((item, idx) => <tr className="" key={idx}>
                                                        <td className="border text-center py-2">{item?.name}</td>
                                                        <td className="border text-center py-2">{item?.email}</td>
                                                        <td
                                                            className="border  h-full text-center py-2">
                                                            {
                                                                item?.role && (<div className="w-full flex justify-center items-center px-5">
                                                                    <select
                                                                        value={item?.role || "user"}
                                                                        onChange={(e) => moderatorRole(item?._id, e)}
                                                                        className='select select-warning bg-transparent  w-32' >
                                                                        <option
                                                                            value="Moderator">Moderator</option>
                                                                        <option value="user">User</option>
                                                                        <option value="Admin">Admin</option>
                                                                    </select>
                                                                </div>)
                                                            }

                                                        </td>

                                                        <td className="border text-center py-2 ">
                                                            <span
                                                                onClick={() => handleDeleteUser(item?._id, item?.name)}
                                                                className="btn btn-sm btn-warning">Delete</span> </td>
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
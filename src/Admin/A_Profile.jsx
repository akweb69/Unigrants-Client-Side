import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthContext/AuthProvider';
import useAllUser from '../Hooks/useAllUser';

const A_Profile = () => {
    const { user, loading } = useContext(AuthContext);
    const [users] = useAllUser();
    const [role, setRole] = useState("");
    const [showRole, setShowRole] = useState(false);

    useEffect(() => {
        if (users && user?.email) {
            const matchedUser = users.find(hi => hi.email === user.email);
            const role = matchedUser?.role || "";
            setRole(role);
            setShowRole(role === "admin" || role === "moderator");
        }
    }, [users, user]);

    return (
        <div className='py-10 h-full w-11/12 mx-auto'>
            <div className="h-full bg-white rounded-xl p-4">
                {
                    loading ? <div className="w-full h-full flex justify-center items-center"><span className="loading loading-bars text-warning loading-lg"></span></div> :
                        <div className="">
                            <div className="w-36 mx-auto h-36 border border-orange-200 rounded-full">
                                <img className='w-full h-full rounded-full p-1' src={user?.photoURL} alt="" />

                            </div>
                            <p className="text-transparent bg-gradient-to-tr from-orange-500 to-fuchsia-500 bg-clip-text w-fit mx-auto text-2xl md:text-3xl font-logoFont font-semibold">{user?.displayName}</p>
                            <p className="text-center font-logoFont text-xl">{user?.email}</p>
                            <p className={`text-center bg-orange-400 w-fit mx-auto px-3 py-2 rounded-lg text-white font-logoFont font-bold my-3 ${!showRole && "hidden"}`}>Role : {role}</p>
                        </div>
                }
            </div>

        </div>
    );
};

export default A_Profile;
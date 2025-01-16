import { useContext } from 'react';
import { AuthContext } from '../AuthContext/AuthProvider';

const MyProfile = () => {
    const { user, loading } = useContext(AuthContext);

    return (
        <div className='w-full h-full p-10'>
            <div className="h-full bg-white rounded-xl p-4">
                {
                    loading ? <div className="w-full h-full flex justify-center items-center"><span className="loading loading-bars text-warning loading-lg"></span></div> :
                        <div className="">
                            <div className="w-36 mx-auto h-36 border border-orange-200 rounded-full">
                                <img className='w-full h-full rounded-full p-1' src={user?.photoURL} alt="" />
                            </div>
                            <p className="text-transparent bg-gradient-to-tr from-orange-500 to-fuchsia-500 bg-clip-text w-fit mx-auto text-2xl md:text-3xl font-logoFont font-semibold">{user?.displayName}</p>
                            <p className="text-center font-logoFont text-xl">{user?.email}</p>
                        </div>
                }
            </div>

        </div>
    );
};

export default MyProfile;
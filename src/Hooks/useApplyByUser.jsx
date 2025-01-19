import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';
import { useContext } from 'react';
import { AuthContext } from '../AuthContext/AuthProvider';

const useApplyByUser = () => {
    const axiosPublic = useAxiosPublic();
    const { user } = useContext(AuthContext);
    const email = user?.email;

    const {
        data: userApply = [],
        isPending,
        isError,
        error,
        refetch,
    } = useQuery({
        queryKey: ["userApply", email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/all_userApply/?email=${email}`);

            console.log(res.data)
            return res.data;
        }
    });

    // Return refetch along with other data
    return { userApply, isPending, isError, error, refetch };
};

export default useApplyByUser;

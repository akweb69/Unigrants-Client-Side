import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';
import { useContext } from 'react';
import { AuthContext } from '../AuthContext/AuthProvider';

const useApplyByUser = () => {
    const axiosPublic = useAxiosPublic();
    const { user } = useContext(AuthContext);
    const email = user?.email;

    // Conditionally run the query only if `email` is available
    const { data: userApply = [], isLoading, isError, error } = useQuery(
        ["userApply", email],
        async () => {
            const res = await axiosPublic.get(`/all_userApply/?email=${email}`);
            return res.data;
        },
        {
            enabled: !!email, // Run the query only when `email` is defined
            staleTime: 300000, // Cache data for 5 minutes
            refetchOnWindowFocus: false, // Optional: Avoid unnecessary refetching on window focus
        }
    );

    // Log or handle errors (Optional)
    if (isError) {
        console.error("Error fetching user applications:", error);
    }

    return { userApply, isLoading, isError, error };
};

export default useApplyByUser;

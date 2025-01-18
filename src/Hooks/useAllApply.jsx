
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useAllApply = () => {
    const axiosPublic = useAxiosPublic()


    const { data: applications = [], refetch, isLoading } = useQuery({
        queryKey: ["applications"],
        queryFn: async () => {
            const res = await axiosPublic.get(`/all_applications`)
            return res.data

        }
    })
    console.log(applications)
    return [applications, refetch, isLoading]
};

export default useAllApply;
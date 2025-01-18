
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useAllApply = () => {
    const axiosPublic = useAxiosPublic()


    const { data: applications = [] } = useQuery({
        queryKey: ["applications"],
        queryFn: async () => {
            const res = await axiosPublic.get(`/all_applications`)
            return res.data

        }
    })
    console.log(applications)
    return [applications]
};

export default useAllApply;
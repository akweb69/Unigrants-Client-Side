
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useScholarship = () => {
    const axiosPublic = useAxiosPublic()


    const { data: scholarship = [], refetch } = useQuery({
        queryKey: ["scholarship"],
        queryFn: async () => {
            const res = await axiosPublic.get(`/top_Scholarship`)
            return res.data

        }
    })
    console.log(scholarship)
    return [scholarship, refetch]

};

export default useScholarship;
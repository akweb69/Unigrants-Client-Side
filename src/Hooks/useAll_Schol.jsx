
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useAll_Schol = () => {
    const axiosPublic = useAxiosPublic()


    const { data: scholarship = [] } = useQuery({
        queryKey: ["scholarship"],
        queryFn: async () => {
            const res = await axiosPublic.get(`/all_Scholarship`)
            return res.data

        }
    })
    console.log(scholarship)
    return [scholarship]

};

export default useAll_Schol;
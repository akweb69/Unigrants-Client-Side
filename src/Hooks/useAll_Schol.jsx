
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useAll_Schol = () => {
    const axiosPublic = useAxiosPublic()


    const { data: scholarship = [], refetch } = useQuery({
        queryKey: ["scholarship"],
        queryFn: async () => {
            const res = await axiosPublic.get(`/all_Scholarship`)
            return res.data.data

        }
    })
    // console.log("from hooks---sh->", scholarship)
    return [scholarship, refetch]

};

export default useAll_Schol;
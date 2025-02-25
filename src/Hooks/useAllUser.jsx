
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useAllUser = () => {
    const axiosPublic = useAxiosPublic()


    const { data: users = [], refetch, isPending } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await axiosPublic.get(`/users`)
            return res.data

        }
    })
    console.log("useallusers--hooks--->", users)
    return [users, refetch, isPending]

};

export default useAllUser;
import { useContext } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { AuthContext } from "../AuthContext/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useScholarship = () => {
    const axiosSecure = useAxiosSecure()
    const { user } = useContext(AuthContext);


    const { refetch, data: scholarship = {} } = useQuery({
        queryKey: ["scholarship"],
        queryFn: async () => {
            const res = await axiosSecure.get(`/add_Scholarship`)
            return res.data
        }
    })
    console.log(scholarship)
    return [scholarship, refetch]

};

export default useScholarship;
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useReviews = () => {
    const axiosPublic = useAxiosPublic()


    const { data: reviews = [], refetch, isLoading } = useQuery({
        queryKey: ["reviews"],
        queryFn: async () => {
            const res = await axiosPublic.get(`/reviews_all`)
            return res.data

        }
    })
    console.log("from hooks-->", reviews)
    return { reviews, refetch, isLoading }
};

export default useReviews;
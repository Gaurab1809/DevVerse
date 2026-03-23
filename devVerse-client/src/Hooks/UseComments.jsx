import { useQuery } from "@tanstack/react-query";
import UseAuth from "./UseAuth";
import useAxiosPublic from "./useAxiosPublic";


const UseComments = (postId) => {
    // const{postsss}=postId;
    const { user } = UseAuth();
    const axiosPublic = useAxiosPublic();
    const gaurab = true
    // console.log('hello',postId)
    const { data: comments = [], isLoading, refetch:commentRefetch } = useQuery({

        queryKey: ['comments', user?.email],
        enabled: gaurab, // Ensure query runs only if user email is available and not loading
        queryFn: async () => {
            const res = await axiosPublic.get(`/getComments/${postId}`); // Fetch posts data
            return res.data; // Return the data directly, assuming it's an array
        },
    });
    
    return [comments, isLoading, commentRefetch];
};

export default UseComments;
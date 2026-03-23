import { useQuery } from "@tanstack/react-query";
import UseAuth from "./UseAuth";
import useAxiosPublic from "./useAxiosPublic";

const UsePosts = () => {
  const { user } = UseAuth();
  const axiosPublic = useAxiosPublic();
  const gaurab = true;

  const {
    data: posts = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["posts", user?.email],
    enabled: gaurab,
    queryFn: async () => {
      const res = await axiosPublic.get(`/main-posts`);
      return res.data;
    },
  });




  return [posts, isLoading, refetch];

};

export default UsePosts;

import { useQuery } from "@tanstack/react-query";
import api from "../api/api";

const useGetData = <T>(url: 'posts' | 'comments' | string, queryKey: string) => {
  const { data, isLoading, error } = useQuery<T>({
    queryKey: [queryKey ],
    queryFn: async ({signal}) => {
      const response = await api.get(url, { signal });	
      return response.data;
    },
    refetchOnWindowFocus: false,
    // refetchInterval: 1000 * 60,
  });
  return { data, isLoading, error };
};

export default useGetData;

import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../api/api";

interface MutationProps<T> {
  newData: T,
  url: string,
  queryKey: string
}

const usePostData = <T>() => {
  const queryClient = useQueryClient();
  
  const mutation = useMutation({
    mutationFn: async ({ newData, url, queryKey }: MutationProps<T>) => {
      void queryKey;
      return api.post(url, newData);
    },
    onError: (error) => {
      return error;
    },
    onSuccess: (data, variables) => {
      queryClient.setQueryData([variables.queryKey], (oldData: []) => {
        return [...(oldData), data.data];
      });
    },
  });
  return mutation;
};
export default usePostData;

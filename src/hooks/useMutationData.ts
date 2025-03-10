import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../api/api";

interface MutationProps {
  newData: NewData;
  method: "post" | "put" | "patch";
  url: string;
}

interface NewData {
  postId: number;
  name: string;
  email: string;
  body: string;
}

const useMutationData = (queryKey: string) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async ({ newData, method, url }: MutationProps) => {
      return api[method](url, newData);
    },
    onError: (error) => {
      return error;
    },
    onSuccess: (data) => {
      queryClient.setQueryData([queryKey], (oldData: []) => {
        return [...oldData, data.data];
      });
    },
  });
  return mutation;
};
export default useMutationData;

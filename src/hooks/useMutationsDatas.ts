import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../api/api";

interface MutationProps {
  newData: NewData;
  method: "post" | "delete" | "put" | "patch";
  url: string;
}

interface NewData {
  postId: number;
  name: string;
  email: string;
  body: string;
}
const useMutationsDatas = (queryKey: string) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: ({ newData, method, url }: MutationProps) => {
      if (method === "delete") return api[method](url);

      return api[method](url, newData);
    },
    onError: (error) => {
      return error;
    },
    onSuccess: (data) => {
      queryClient.setQueryData([queryKey], (oldData: []) => [
        ...oldData,
        data.data,
      ]);
    },
  });
  return mutation;
};
export default useMutationsDatas;

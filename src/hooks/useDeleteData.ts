import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../api/api";

interface MutationProps {
deleteId: number,
  url: string;
}

const useDeleteData = (queryKey: string) => {
  const queryClient = useQueryClient();
  const deleteMutation = useMutation({
    mutationFn: async ({ url, deleteId }: MutationProps) => {
      return api.delete(url)
    },
    onError: (error) => {
      return error;
    },
    onSuccess: (_, variables) => {
      queryClient.setQueryData([queryKey], 
        (oldData: {id:number} []) =>{
        return oldData.filter((data) => data.id !== variables.deleteId)
      });
    },
  });
  return deleteMutation;
};
export default useDeleteData;

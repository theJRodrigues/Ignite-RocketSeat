import { Trash2 } from "lucide-react";
import ProfileInfo from "../../Profile/ProfileInfo";
import useRandomDate from "../../../hooks/useRandomDate";
import useDeleteData from "../../../hooks/useDeleteData";

interface CommentHeaderProps {
  name: string;
  commentId: number
}
const CommentHeader = ({ name, commentId }: CommentHeaderProps) => {
  const { contentDate, titleDate } = useRandomDate();
  const deleteMutation = useDeleteData("comments");

  const handleDeleteComment = () =>{
    deleteMutation.mutate({ url: `comments/${commentId}`, deleteId: commentId})
  }
  return (
    <header className="flex justify-between items-center">
      <div>
        <ProfileInfo name={name} />
        <time className="capitalize text-sm text-gray-300" title={titleDate}>
          {contentDate}
        </time>
      </div>
      <button className="text-gray-300 hover:text-danger cursor-pointer" onClick={handleDeleteComment}>
        <Trash2 />
      </button>
    </header>
  );
};

export default CommentHeader;

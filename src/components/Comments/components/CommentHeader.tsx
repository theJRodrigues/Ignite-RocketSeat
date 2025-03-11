import { Trash2 } from "lucide-react";
import ProfileInfo from "../../Profile/ProfileInfo";
import useRandomDate from "../../../hooks/useRandomDate";
import useDeleteData from "../../../hooks/useDeleteData";
import CommentDeleteModal from "./CommentDeleteModal";
import { useState } from "react";
import { createPortal } from "react-dom";

interface ICommentHeaderProps {
  name: string,
  commentId: number,
}
const CommentHeader = ({ name, commentId }: ICommentHeaderProps) => {
  const { contentDate, titleDate } = useRandomDate();
  const [isOpenDeleteCommentModal, setisOpenDeleteCommentModal] = useState(false)
  const deleteMutation = useDeleteData("comments");


  const handleOpenCommentDeleteModal = () =>{
    setisOpenDeleteCommentModal(true)
  }

  const handleCloseCommentDeleteModal = () =>{
    setisOpenDeleteCommentModal(false)
  }

  const handleDeleteComment = () =>{
    deleteMutation.mutate({ url: `comments/${commentId}`, deleteId: commentId})
  }

  return (
    <>
    <header className="flex justify-between items-center">
      <div>
        <ProfileInfo name={name} />
        <time className="capitalize text-sm text-gray-300" title={titleDate}>
          {contentDate}
        </time>
      </div>
      <button className="text-gray-300 hover:text-danger cursor-pointer" onClick={handleOpenCommentDeleteModal}>
        <Trash2 />
      </button>
    </header>

    {isOpenDeleteCommentModal 
      && createPortal(
        <CommentDeleteModal
          isOpenModal={isOpenDeleteCommentModal} 
          handleCloseModal={handleCloseCommentDeleteModal}
          handleCommentDelete = {handleDeleteComment}
        />,
        document.body
    )}
    </>



  );
};

export default CommentHeader;

import ProfileAvatar from "../ProfileAvatar";
import { ThumbsUp } from "lucide-react";
import { useState } from "react";
import CommentHeader from "./components/CommentHeader";
import avatarUrl from "/src/assets/profile-avatar.png";
import useGetData from "../../hooks/useGetData";
import LikeButton from "./components/LikeButton";

interface NewCommentBoxProps {
  postId: number;
  publishedAt: string;
}

type CommentsType = {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
};

const CommentBox = ({ publishedAt, postId }: NewCommentBoxProps) => {
  const {
    data: comments,
    isLoading,
    error,
  } = useGetData<CommentsType[]>("comments", "comments");

  return (
    <>
      {isLoading ? (
        <p> Carregando...</p>
      ) : error ? (
        <p>Ocorreu um Erro, tente novamente mais tarde</p>
      ) : (
        comments?.map(
          (comment) =>
            comment.postId === postId && (
              <article className="flex gap-2" key={comment.id}>
                <aside>
                  <ProfileAvatar avatarUrl={avatarUrl} />
                </aside>

                <div className="w-full space-y-2">
                  <section className="rounded-xl bg-[#29292E] p-2 space-y-2">
                    <CommentHeader
                      name={comment.name}
                      publishedAt={publishedAt}
                    />

                    <main className="text-md text-gray-100">
                      <p>{comment.body}</p>
                    </main>
                  </section>

                  <LikeButton likes={Math.floor(Math.random() * 100)} />
                </div>
              </article>
            )
        )
      )}
    </>
  );
};

export default CommentBox;

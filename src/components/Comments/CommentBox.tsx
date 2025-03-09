import ProfileAvatar from "../ProfileAvatar";
import CommentHeader from "./components/CommentHeader";
import avatarUrl from "/src/assets/profile-avatar.png";
import useGetData from "../../hooks/useGetData";
import LikeButton from "./components/LikeButton";

interface NewCommentBoxProps {
  postId: number;
}

interface CommentsType {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
};

const CommentBox = ({ postId }: NewCommentBoxProps) => {
  const {
    data: comments,
    isLoading,
    error,
  } = useGetData<CommentsType[]>(
    `/posts/${postId}/comments`,
    `comments${postId}`
  );

  const randomLikes = () => Math.floor(Math.random() * 10);

  return (
    <>
      {isLoading ? (
        <p> Carregando...</p>
      ) : error ? (
        <p>Ocorreu um Erro, tente novamente mais tarde</p>
      ) : (
        comments?.map((comment) => (
          <article className="flex gap-2" key={comment.id}>
            <aside>
              <ProfileAvatar avatarUrl={avatarUrl} />
            </aside>

            <div className="w-full space-y-2">
              <section className="rounded-xl bg-[#29292E] p-2 space-y-2">
                <CommentHeader name={comment.name} />
                <main className="text-md text-gray-100">
                  <p>{comment.body}</p>
                </main>
              </section>
              <LikeButton likes={randomLikes()} />
            </div>
          </article>
        ))
      )}
    </>
  );
};

export default CommentBox;

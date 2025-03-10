import ProfileAvatar from "../Profile/ProfileAvatar";
import CommentHeader from "./components/CommentHeader";
import avatarUrl from "/src/assets/profile-avatar.png";
import LikeButton from "./components/LikeButton";
import { IComments } from "../../pages/posts/PostsPage";

interface NewCommentBoxProps {
  comments: IComments[] | undefined;
}

const CommentBox = ({ comments }: NewCommentBoxProps) => {
  const randomLikes = () => Math.floor(Math.random() * 10);

  const commentsReverse = comments?.slice(0).reverse()
  return (
    <>
      {commentsReverse?.map((comment) => (
        <article className="flex gap-2" key={comment.id}>
          <aside>
            <ProfileAvatar avatarUrl={avatarUrl} />
          </aside>

          <div className="w-full space-y-2">
            <section className="rounded-xl bg-[#29292E] p-2 space-y-2">
              <CommentHeader name={comment.name} commentId={comment.id}/>
              <main className="text-md text-gray-100">
                <p>{comment.body}</p>
              </main>
            </section>
            <LikeButton likes={randomLikes()} />
          </div>
        </article>
      ))}
    </>
  );
};

export default CommentBox;

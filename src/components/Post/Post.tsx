import useRandomDate from "../../hooks/useRandomDate";
import { IComments, IPost, IUser } from "../../pages/posts/PostsPage";
import CommentBox from "../Comments/CommentBox";
import ProfileAvatar from "../Profile/ProfileAvatar";
import ProfileInfo from "../Profile/ProfileInfo";
import NewCommentForm from "./NewCommentForm";

interface ICommentsInfos {
  comments: IComments[] | undefined;
  isLoadingComments: boolean;
  errorComments: Error | null;
}

interface IPostUser {
  user: IUser | undefined;
  isLoadingUser: boolean;
  errorUser: Error | null;
}
interface PostProps {
  postInfos: IPost;
  postComments: ICommentsInfos;
  avatarUrl: string;
  postUser: IPostUser;
}

const Post = ({ avatarUrl, postInfos, postComments, postUser }: PostProps) => {
  const { user, errorUser, isLoadingUser } = postUser;
  const { id: postId, userId, body } = postInfos;
  const { comments, errorComments, isLoadingComments } = postComments;
  const { contentDate, titleDate } = useRandomDate();

  return (
    <article className="w-full bg-gray-600 rounded-2xl p-4">
      <header className="flex items-center gap-2">
        <figure>
          <ProfileAvatar avatarUrl={avatarUrl} hasBorder />
        </figure>

        <div className="grow-1">
          {isLoadingUser ? (
            <p>Carregando Usuário</p>
          ) : errorUser ? (
            <p>Ocorreu um erro, tente novamente mais tarde</p>
          ) : (
            <ProfileInfo name={user?.name} role="Dev Front-End" />
          )}
        </div>

        <time className="text-md text-gray-300" title={titleDate}>
          {contentDate}
        </time>
      </header>

      <main className="text-lg text-gray-200 space-y-2 my-2">
        <p>{body}</p>

        <strong className="text-green-light font-bold">
          #novoprojeto #nlw #rocketseat
        </strong>
      </main>

      <hr className="w-full text-gray-500" />

      <footer className="space-y-2 mt-2 text-gray-100 text-lg">
        <h2 className=" font-bold ">Deixe seu feedback</h2>

        <NewCommentForm postId={postId} />

        <section className="space-y-4 mt-4">
          {isLoadingComments ? (
            <p>Carregando...</p>
          ) : errorComments ? (
            <p>Ocorreu um erro, tente novamente mais tarde</p>
          ) : (
            <CommentBox comments={comments} />
          )}
        </section>
      </footer>
    </article>
  );
};

export default Post;

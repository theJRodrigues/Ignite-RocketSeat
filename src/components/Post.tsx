import ProfileAvatar from "./ProfileAvatar";
import ProfileInfo from "./ProfileInfo";

import NewCommentForm from "./NewCommentForm";
const Post = ({ content, avatarUrl, postId}) => {
  console.log(postId)
  return (
    <article className="w-full bg-gray-600 rounded-2xl p-4">
      <header className="flex items-center gap-2">
        <figure>
          <ProfileAvatar avatarUrl={avatarUrl} hasBorder />
        </figure>
        <div className="grow-1">
          <ProfileInfo name="Jane Cooper" role="Dev Front-End" />
        </div>
        <time className="text-md text-gray-300">Públicado há 1h</time>
      </header>
      <main className="text-lg text-gray-200 space-y-2 my-2">
        <p>{content}</p>
        <strong className="text-green-light font-bold">
          #novoprojeto #nlw #rocketseat
        </strong>
      </main>
      <hr className="w-full text-gray-500" />
      <footer className="space-y-2 mt-2 text-gray-100 text-lg">
        <h2 className=" font-bold ">Deixe seu feedback</h2>
        <NewCommentForm />
      </footer>
    </article>
  );
};

export default Post;

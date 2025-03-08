import ProfileAvatar from "./ProfileAvatar";
import ProfileInfo from "./ProfileInfo";

import NewCommentForm from "./NewCommentForm";
import CommentBox from "./Comments/CommentBox";
import useGetData from "../hooks/useGetData";
import { useMemo } from "react";
import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

type UserType = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

const Post = ({ content, avatarUrl, postId, userId }) => {
    const {
    data: users,
    isLoading: isLoadingUsers,
    error: errorUsers,
  } = useGetData<UserType[]>("users", "users");

  const  publishedAt = () => {
    const randomDate = new Date(2020, 0, 1).getTime() 
    + Math.random() 
    * (new Date().getTime() - new Date(2020, 0, 1).getTime());
      const date = formatDistanceToNow(randomDate, {
            locale: ptBR,
            addSuffix: true,
          });
    return date
}

  const filterUser = users?.find((user) => user.id === userId)
  

  return (
    <article className="w-full bg-gray-600 rounded-2xl p-4">
      <header className="flex items-center gap-2">
        <figure>
          <ProfileAvatar avatarUrl={avatarUrl} hasBorder />
        </figure>
        <div className="grow-1">
           <ProfileInfo name={filterUser?.name} role="Dev Front-End" />
        </div>
        <time className="text-md text-gray-300">{publishedAt()}</time>
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
        <section className="space-y-4 mt-4">
          <CommentBox postId={postId} publishedAt={publishedAt()} />
        </section>
      </footer>
    </article>
  );
};

export default Post;

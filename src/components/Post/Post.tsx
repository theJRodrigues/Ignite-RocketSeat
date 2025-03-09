import useGetData from "../../hooks/useGetData";
import useRandomDate from "../../hooks/useRandomDate";
import CommentBox from "../Comments/CommentBox";
import ProfileAvatar from "../ProfileAvatar";
import ProfileInfo from "../ProfileInfo";
import NewCommentForm from "./components/NewCommentForm";


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

interface PostProps{
  content: string,
  avatarUrl: string,
  postId: number,
  userId: number
}
const Post = ({ content, avatarUrl, postId, userId }: PostProps) => {
 
  const {data: user} = useGetData<UserType>(`users/${userId}`, `user${userId}`);
  const {contentDate, titleDate} = useRandomDate();
  
  return (
    <article className="w-full bg-gray-600 rounded-2xl p-4">
      <header className="flex items-center gap-2">
        <figure>
          <ProfileAvatar avatarUrl={avatarUrl} hasBorder />
        </figure>
        <div className="grow-1">
          <ProfileInfo name={user?.name} role="Dev Front-End" />
        </div>
        <time className="text-md text-gray-300" title={titleDate}>
          {contentDate}
        </time>
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
        <NewCommentForm postId={postId}/>
        <section className="space-y-4 mt-4">
          <CommentBox postId={postId}  />
        </section>
      </footer>
    </article>
  );
};

export default Post;

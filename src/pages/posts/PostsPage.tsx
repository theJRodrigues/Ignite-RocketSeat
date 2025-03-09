import Post from "../../components/Post/Post";

import useGetData from "../../hooks/useGetData";

import avatarUrl from "/src/assets/profile-avatar.png";
import ProfileCard from "../../components/Profile/ProfileCard";

export interface IPost {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export interface IComments {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
}

export interface IUser{
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

const PostsPage = () => {
  const {
    data: posts,
    isLoading: isLoadingPosts,
    error: errorPosts,
  } = useGetData<IPost[]>("posts?_limit=30", "posts");

  const {
    data: comments,
    error: errorComments,
    isLoading: isLoadingComments,
  } = useGetData<IComments[]>("comments?_limit=100", "comments");

  const {
    data: users,
    error: errorUsers,
    isLoading: isLoadingUsers,
  } = useGetData<IUser[]>("users?_limit=3", "users");

  const filterCommentsByPostId = (postId: number) =>
    comments?.filter((comment) => comment.postId === postId);

  const findUserByPostUserId = (userId: number) =>
    users?.find((user) => user.id === userId)


  return (
    <main className="text-white flex justify-center items-start gap-2  my-4">
      <ProfileCard avatarUrl={avatarUrl} />

      <div className="flex flex-col gap-3 w-full max-w-83 text-lg text-gray-100">
        {isLoadingPosts ? (
          <p className="w-full max-w-83 bg-gray-600 rounded-2xl p-4">
            Carregando...
          </p>
        ) : errorPosts ? (
          <p className="w-full max-w-83 bg-gray-600 rounded-2xl p-4 ">
            Erro ao carregar os posts, tente novamente mais tarde
          </p>
        ) : (
          posts?.map((post) => (
            <Post
              key={post.id}
              postInfos={post}
              postUser = {{
                user: findUserByPostUserId(post.userId),
                isLoadingUser: isLoadingUsers,
                errorUser: errorUsers
              }}
              postComments={{
                comments: filterCommentsByPostId(post.id),
                isLoadingComments: isLoadingComments,
                errorComments: errorComments,
              }}
              avatarUrl={avatarUrl}
            />
          ))
        )}
      </div>
    </main>
  );
};

export default PostsPage;

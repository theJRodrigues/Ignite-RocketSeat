import React from "react";
import Post from "../../components/Post";
import ProfileCard from "../../components/ProfileCard";
import useGetData from "../../hooks/useGetData";

import avatarUrl from "../../assets/profile-avatar.png";
import CommentBox from "../../components/Comments/CommentBox";

type PostType = {
  id: number;
  userId: number;
  title: string;
  body: string;
};



const PostsPage = () => {
  const {
    data: posts,
    isLoading: isLoadingPosts,
    error: errorPosts,
  } = useGetData<PostType[]>("posts?_limit=30", "posts");

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
            Erro ao carregar os posts
          </p>
        ) : (
          posts?.map((post) => (
            <Post
              postId={post.id}
              key={post.id}
              content={post.body}
              avatarUrl={avatarUrl}
              userId= {post.userId}
            />
          ))
        )}
      </div>
    </main>
  );
};

export default PostsPage;

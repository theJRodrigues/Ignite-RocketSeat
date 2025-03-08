import React from "react";
import Post from "../../components/Post";
import ProfileCard from "../../components/ProfileCard";
import useGetData from "../../hooks/useGetData";

import avatarUrl from "../../assets/profile-avatar.png";
import CommentBox from "../../components/CommentBox";

type PostType = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

type CommentsType = {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
};

const PostsPage = () => {
  const {
    data: posts,
    isLoading: isLoadingPosts,
    error: errorPosts,
  } = useGetData<PostType[]>("posts?_limit=50", "posts");

  const {
    data: comments,
    isLoading: isLoadingComments,
    error: errorComments,
  } = useGetData<CommentsType[]>("comments", "comments");

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
            <>
            <Post
            postId={post.id}
              key={post.id}
              content={post.body}
              avatarUrl={avatarUrl}
            />
            <section>
              {isLoadingComments ? (
                <p>Carregando...</p>
              ) : errorComments ? (
                <p>Erro ao carregar os comentários</p>
              ) : comments?.map((comment) => (
                comment.postId === post.id &&
                <CommentBox
                key={comment.id}
                  postId={post.id}
                  name={comment.name}
                  body={comment.body}
                  publicationDate={new Date()}
                  avatarUrl={avatarUrl}
                  likes={Math.floor(Math.random() * 100)}
                />
              ))}
            </section>
            </>
            
          ))
        )}
      </div>
    </main>
  );
};

export default PostsPage;

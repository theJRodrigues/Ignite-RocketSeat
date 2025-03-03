import React from "react";
import Post from "../../components/Post";
import ProfileCard from "../../components/ProfileCard";

const PostsPage = () => {
  return (
    <main className="text-white flex justify-center items-start gap-2  my-4">
      <ProfileCard />
      <Post />
    </main>
  );
};

export default PostsPage;

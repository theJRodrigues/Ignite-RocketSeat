import React from "react";
import ProfileCard from "./components/profile-card/ProfileCard";
import Post from "./components/posts/Post";

const PostsPage = () => {
  return (
    <main className="text-white flex justify-center gap-2  my-4">
      <ProfileCard />
      <Post />
    </main>
  );
};

export default PostsPage;

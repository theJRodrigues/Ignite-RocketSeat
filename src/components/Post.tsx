import React from "react";
import ProfileAvatar from "./ProfileAvatar";
import ProfileInfo from "./ProfileInfo";

import avatarImg from "../assets/jane-cooper-avatar.svg";
import NewCommentForm from "./NewCommentForm";
import CommentBox from "./CommentBox";

const Post = () => {
  const date = new Date();
  return (
    <article className="w-full max-w-83 bg-gray-600 rounded-2xl p-4">
      <header className="flex items-center gap-2">
        <figure>
          <ProfileAvatar avatarUrl={avatarImg} hasBorder />
        </figure>
        <div className="grow-1">
          <ProfileInfo name="Jane Cooper" role="Dev Front-End" />
        </div>
        <time className="text-md text-gray-300">Públicado há 1h</time>
      </header>
      <main className="text-lg text-gray-200 space-y-2 my-2">
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare🚀
        </p>
        <p className="text-green-light font-bold">
          <a href="#"> 👉 jane.design/doctorcare</a>
        </p>
        <strong className="text-green-light font-bold">
          #novoprojeto #nlw #rocketseat
        </strong>
      </main>
      <hr className="w-full text-gray-500" />
      <footer className="space-y-2 mt-2 text-gray-100 text-lg">
        <h2 className=" font-bold ">Deixe seu feedback</h2>
        <NewCommentForm />
        <CommentBox publicationDate={date} />
      </footer>
    </article>
  );
};

export default Post;

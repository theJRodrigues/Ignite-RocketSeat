import React from "react";
import ProfileAvatar from "./ProfileAvatar";
import EditProfileBtn from "./EditProfileBtn";
import profileImage from "../assets/profile-img.svg";
import profileCover from "../assets/profile-cover.jpg";
import ProfileInfo from "./ProfileInfo";

const ProfileCard = () => {
  return (
    <aside className="w-full max-w-26 bg-gray-600 rounded-2xl overflow-hidden">
      <img
        src={profileCover}
        alt="background of profile card"
        className=" w-full h-[7.2rem]"
      />
      <div className="text-center -mt-3">
        <figure className="m-auto w-fit relative z-1">
          <ProfileAvatar avatarUrl={profileImage} />
        </figure>

        <div className="my-2.5">
          <ProfileInfo name="Leslie Alexander" role="UI Designer" />
        </div>
      </div>

      <hr className="w-full text-gray-500" />

      <div className="p-3 text-center">
        <EditProfileBtn />
      </div>
    </aside>
  );
};

export default ProfileCard;

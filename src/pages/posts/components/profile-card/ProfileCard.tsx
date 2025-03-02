import React from "react";
import profileCover from "../../../../assets/profile-cover.jpg";
import AvatarProfile from "../../../../components/AvatarProfile";
import EditProfileBtn from "../../../../components/EditProfileBtn";

import profileImage from "../../../../assets/profile-img.svg";
const ProfileCard = () => {
  return (
    <aside className="w-full max-w-26 bg-gray-600 rounded-2xl pt-4 pb-3 px-3 relative overflow-hidden">
      <img
        src={profileCover}
        alt="background of profile card"
        className="absolute top-0 left-0 w-full h-[7.2rem]"
      />
      <div className="text-center">
        <figure className="relative  z-1 m-auto w-fit">
          <AvatarProfile avatarUrl={profileImage} />
        </figure>

        <div className="my-2.5">
          <h2 className="text-gray-100 font-bold text-lg">Leslie Alexander</h2>
          <p className="text-gray-300 text-md">UI Designer</p>
        </div>
      </div>
      <hr className="w-[150%] relative -left-3 text-gray-500" />
      <div className="text-center mt-2.5">
        <EditProfileBtn/>
      </div>
    </aside>
  );
};

export default ProfileCard;

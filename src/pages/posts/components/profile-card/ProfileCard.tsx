import React from "react";
import profileCover from "../../../../assets/profile-cover.jpg";
import AvatarProfile from "../../../../components/AvatarProfile";
import EditProfileBtn from "../../../../components/EditProfileBtn";

import profileImage from "../../../../assets/profile-img.svg";
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
          <AvatarProfile avatarUrl={profileImage} />
        </figure>

        <div className="my-2.5">
          <h2 className="text-gray-100 font-bold text-lg">Leslie Alexander</h2>
          <p className="text-gray-300 text-md">UI Designer</p>
        </div>
      </div>

      <hr className="w-full text-gray-500" />

      <div className="p-3 text-center">
        <EditProfileBtn/>
      </div>
    </aside>
  );
};

export default ProfileCard;

import React from "react";

interface ProfileAvatarProps {
  avatarUrl: string;
}

const ProfileAvatar = ({ avatarUrl }: ProfileAvatarProps) => {
  return (
    <figure className="size-6 bg-gray-600 p-0.5 outline-2 outline-green-light rounded-xl">
      <img
        src={avatarUrl}
        alt="profile avatar"
        className="rounded-xl size-full"
      />
    </figure>
  );
};

export default ProfileAvatar;

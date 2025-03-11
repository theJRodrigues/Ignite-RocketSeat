interface ProfileAvatarProps {
  avatarUrl: string;
  hasBorder?: boolean;
}

const ProfileAvatar = ({ avatarUrl, hasBorder }: ProfileAvatarProps) => {

  const insertBorder = hasBorder && "box-content bg-gray-600 p-0.5 outline-2 outline-green-light";

  return (
    <figure className={`size-6 ${insertBorder} rounded-xl`}>
      <img
        src={avatarUrl}
        alt="profile avatar"
        className="rounded-xl size-full"
      />
    </figure>
  );
};

export default ProfileAvatar;

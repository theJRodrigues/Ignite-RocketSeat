import profileCover from "/src/assets/profile-cover.jpg";
import ProfileAvatar from "./ProfileAvatar";
import ProfileInfo from "./ProfileInfo";
import EditProfileBtn from "./EditProfileBtn";


interface ProfileCard{
  avatarUrl: string
}

const ProfileCard = ({avatarUrl}: ProfileCard) => {
  return (
    <aside className="w-full max-w-26 bg-gray-600 rounded-2xl overflow-hidden">
      <img
        src={profileCover}
        alt="background of profile card"
        className=" w-full h-[7.2rem]"
      />
      <div className="text-center -mt-3">
        <figure className="m-auto w-fit relative z-1">
          <ProfileAvatar avatarUrl={avatarUrl} hasBorder/>
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

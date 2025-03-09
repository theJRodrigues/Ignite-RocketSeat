interface ProfileInfoProps {
  name: string | undefined;
  role?: string;
}
const ProfileInfo = ({ name, role}: ProfileInfoProps) => {
  return (
    <>
      <h2 className="text-gray-100 font-bold text-lg capitalize">{name}</h2>
      {role && <h3 className="text-gray-300 text-md">{role}</h3>}
    </>
  );
};

export default ProfileInfo;

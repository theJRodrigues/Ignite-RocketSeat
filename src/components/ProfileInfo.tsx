import React from "react";
interface ProfileInfoProps {
  name: string;
  role: string;
}
const ProfileInfo = ({ name, role }: ProfileInfoProps) => {
  return (
    <>
      <h2 className="text-gray-100 font-bold text-lg">{name}</h2>
      <h3 className="text-gray-300 text-md">{role}</h3>
    </>
  );
};

export default ProfileInfo;

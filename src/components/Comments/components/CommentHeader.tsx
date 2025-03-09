import { Trash2 } from "lucide-react";
import ProfileInfo from "../../Profile/ProfileInfo";
import useRandomDate from "../../../hooks/useRandomDate";

interface CommentHeaderProps {
  name: string;
}
const CommentHeader = ({ name }: CommentHeaderProps) => {
  const { contentDate, titleDate } = useRandomDate();

  return (
    <header className="flex justify-between items-center">
      <div>
        <ProfileInfo name={name} />
        <time className="capitalize text-sm text-gray-300" title={titleDate}>
          {contentDate}
        </time>
      </div>
      <button className="text-gray-300 hover:text-danger cursor-pointer">
        <Trash2 />
      </button>
    </header>
  );
};

export default CommentHeader;

import { Trash2 } from "lucide-react";
import { useMemo } from "react";
import ProfileInfo from "../../ProfileInfo";
import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

const CommentHeader = ({ publishedAt, name }) => {
//   const pusblishedAt = useMemo(() => {
//     return formatDistanceToNow(publishedAt, {
//       locale: ptBR,
//       addSuffix: true,
//     });
//   }, [publishedAt]);

//   const titlePublishedAt = useMemo(() => {
//     return format(publishedAt, "d 'de' MMMM 'de' yyyy 'às' p", {
//       locale: ptBR,
//     });
//   }, [publishedAt]);

  return (
    <header className="flex justify-between items-center">
      <div>
        <ProfileInfo name={name} />
        <time
          className="capitalize text-sm text-gray-300"
          title={publishedAt}
        >
          {publishedAt}
        </time>
      </div>

      <button className="text-gray-300 hover:text-danger cursor-pointer">
        <Trash2 />
      </button>
    </header>
  );
};

export default CommentHeader;

import ProfileAvatar from "./ProfileAvatar";
import ProfileInfo from "./ProfileInfo";
import { ptBR } from "date-fns/locale";
import { format, formatDistanceToNow } from "date-fns";
import { ThumbsUp, Trash2 } from "lucide-react";
import { useMemo } from "react";

interface NewCommentBoxProps {
  postId: number;
  publicationDate: Date;
  avatarUrl: string;
}



const CommentBox = ({publicationDate, avatarUrl, likes, name, body}: NewCommentBoxProps) => {
  const pusblishedAt = useMemo(() => {
    return formatDistanceToNow(publicationDate, {
      locale: ptBR,
      addSuffix: true,
    });
  }, [publicationDate]);

  const titlePublishedAt = useMemo(() => {
    return format(publicationDate, "d 'de' MMMM 'de' yyyy 'às' p", {
      locale: ptBR,
    });
  }, [publicationDate]);

  return (
 
          <article className="flex gap-2">
            <aside>
              <ProfileAvatar avatarUrl={avatarUrl} />
            </aside>

            <div className="w-full space-y-2">
              <section className="rounded-xl bg-[#29292E] p-2 space-y-2">
                <header className="flex justify-between items-center">
                  <div>
                    <ProfileInfo name={name} />
                    <time
                      className="capitalize text-sm text-gray-300"
                      title={titlePublishedAt}
                    >
                      {pusblishedAt}
                    </time>
                  </div>
                  <button className="text-gray-300 hover:text-danger cursor-pointer">
                    <Trash2 />
                  </button>
                </header>
                <main className="text-md text-gray-100">
                  <p>{body}</p>
                </main>
              </section>
              <footer className="flex items-center text-gray-300 font-bold text-md ">
                <button className="flex gap-1 cursor-pointer hover:text-green-light">
                  <ThumbsUp size={20} />
                  Aplaudir • {likes}
                </button>
              </footer>
            </div>
          </article>
  );
};

export default CommentBox;
